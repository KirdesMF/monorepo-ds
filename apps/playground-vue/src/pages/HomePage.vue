<script setup lang="ts">
import { loadNamespaces } from '@/config/i18n.config';
import { i18n } from '@/main';

await loadNamespaces(i18n, 'fr-FR', 'global');
</script>

<template>
  <div>Home</div>
  <RouterLink to="/about" class="text-white underline">About</RouterLink>
</template>
