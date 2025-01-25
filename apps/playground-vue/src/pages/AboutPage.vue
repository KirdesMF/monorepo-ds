<script setup lang="ts">
import { loadNamespaces } from '@/config/i18n.config';
import { i18n } from '@/main';

await loadNamespaces(i18n, 'fr-FR', 'global');
</script>

<template>
  <div>About</div>
  <RouterLink to="/" class="text-white underline">Home</RouterLink>
</template>
