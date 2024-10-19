<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({
  name: "LnButton",
});

let props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});

const slot = defineSlots();
const _ref = ref<HTMLButtonElement>();
</script>


<template>
  <component
    :is="props.tag"
    ref="_ref"
    class="ln-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`ln-button--${type}`]: type,
      [`ln-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
  >
  <slot></slot>
  </component>
</template>