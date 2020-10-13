<script>
// We use symbols as unique identifiers.
import { provide, reactive, computed } from 'vue';

export function activateMask(newValue, masks) {
	let value = newValue;
	masks.forEach((mask) => {
		value = mask(newValue);
	});
	return value;
}
export default {
	render() {
		return this.$slots.default();
	},
	setup() {
		const uiFields = reactive(new Map());

		const getValue = (key) => computed(() => uiFields.get(key));

		const getValues = computed(() => [...uiFields.values()]);

		const setValue = (name, masks = []) => (newVal) => {
			const value = activateMask(newVal, masks);
			uiFields.set(name, value);
		};

		const computedValue = (name, hooks = [], initialValue = '') => {
			if (initialValue) {
				const val = activateMask(initialValue, hooks);
				uiFields.set(name, val);
			}
			return computed({
				get: () => uiFields.get(name),
				set: setValue(name, hooks),
			});
		};

		provide('getUIFields', uiFields);

		provide('getUIFieldsValue', getValue);
		provide('setUIFieldsValue', setValue);

		provide('getUIFieldsValues', getValues);
		provide('UIFieldsValue', computedValue);
	},
};
</script>
