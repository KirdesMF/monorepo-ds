<script setup lang="ts">
import { Dialog } from '@ark-ui/vue';
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger class="border border-black rounded shadow-sm text-black px-4 py-2">
      Open Dialog
    </Dialog.Trigger>

    <Teleport to="body">
      <Dialog.Backdrop class="bg-black/50 fixed inset-0 z-af-overlay" />

      <Dialog.Positioner class="fixed inset-0 grid place-items-center z-af-dialog">
        <Dialog.Content class="border bg-gray-800 rounded shadow-sm text-gray-100 p-4">
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
