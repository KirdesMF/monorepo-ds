<script setup lang="ts">
type Props = {
  className?: string;
  text: string;
  type: 'button' | 'submit' | 'reset';
};

const props = defineProps<Props>();
</script>

<template>
  <button
    :class="['af-bg-pink-500 af-text-white af-p-2 af-rounded-md', props.className]"
    :type="props.type"
  >
    {{ props.text }}
  </button>
</template>
