<script setup lang="ts">
type Props = {
  className?: string;
  text: string;
  type: 'button' | 'submit' | 'reset';
};

const props = defineProps<Props>();
</script>

<template>
  <button :class="['bg-pink-500 text-white p-2 rounded-md', props.className]" :type="props.type">
    {{ props.text }}
  </button>
</template>
