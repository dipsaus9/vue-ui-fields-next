import { computed, inject } from "vue";

export function trim(value) {
  return value.trim();
}

export function toUpperCase(newValue) {
  return newValue.toUpperCase();
}
export async function dto(values) {
  return values.map(item => {
    item.value += " hallo";
    return item;
  });
}

export function getValue(key) {
  return inject("getUIFieldsValue")(key);
}

export function setValue(key) {
  const setValue = inject("setUIFieldsValue");
  return setValue(key);
}

export function createCondition(key1, key2) {
  return computed(() => {
    const uiFields = inject("getUIFields");
    return uiFields.get(key1) === uiFields.get(key2);
  });
}
