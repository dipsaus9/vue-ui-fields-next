<template>
  <Input
    type="text"
    v-model="testValue"
    name="test"
    :mask="toUpperCase"
    :blur="setTest2Value"
  />
  <Input type="text" name="test2" :mask="toUpperCase" />
  <Input type="text" name="test3" :mask="toUpperCase" v-show="match" clas />
</template>

<script>
import {
  Input,
  getValue,
  toUpperCase,
  setValue,
  createCondition,
  trim
} from "vue-ui-fields";

import { ref, watch } from "vue";

export default {
  components: {
    Input
  },
  setup() {
    const testValue = ref("");

    const value = getValue("test");
    const value2 = getValue("test2");

    const setTest2Value = setValue("test2");

    watch(value, newValue => {
      setTest2Value(newValue);
    });

    // Get a computed value of match
    const match = createCondition("test", "test2");

    return {
      testValue,
      value,
      value2,
      trim,
      toUpperCase,
      match,
      setTest2Value
    };
  }
};
</script>
