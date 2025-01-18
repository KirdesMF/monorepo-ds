<script setup lang="ts">
import { cn } from '@kirdes-org/utils';
import { useAttrs, type ButtonHTMLAttributes } from 'vue';

const attrs = useAttrs();

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant?: 'primary' | 'secondary';
}
defineProps<Props>();
</script>

<template>
  <button
    v-bind="$props"
    :class="
      cn('bg-af-pink-100 hover:bg-af-teal-600 text-white p-2 rounded-lg', attrs.class as string)
    "
  >
    <slot />
  </button>
</template>
