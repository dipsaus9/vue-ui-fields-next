<template>
  <input
    :name="name"
    v-bind="$attrs"
    v-model="computedValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="onBlur"
  />
</template>

<script>
import { inject, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    mask: {
      type: [Array, Function],
      default: () => []
    },
    blur: {
      type: [Array, Function],
      default: () => []
    },
    modelValue: {
      type: String
    },
    name: {
      type: String,
      default: () => String(Math.random())
    }
  },
  setup(props) {
    const blur = props.blur
      ? Array.isArray(props.blur)
        ? props.blur
        : [props.blur]
      : [];

    const mask = props.mask
      ? Array.isArray(props.mask)
        ? props.mask
        : [props.mask]
      : [];

    const computedValue = inject("UIFieldsValue")(
      props.name,
      mask,
      props.modelValue
    );

    const setValue = inject("setUIFieldsValue")(props.name, blur);

    const onBlur = $event => setValue($event.target.value);

    return {
      computedValue,
      onBlur
    };
  }
});
</script>
