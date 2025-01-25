<script setup lang="ts">
import { loadNamespaces } from '@/config/i18n.config';
import { i18n } from '@/main';
import { RouterView } from 'vue-router';

await loadNamespaces(i18n, 'fr-FR', 'global');
</script>

<template>
  <main class="bg-af-blue-600 min-h-dvh p-8">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
