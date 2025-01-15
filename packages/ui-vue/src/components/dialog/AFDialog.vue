<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue';
</script>

<template>
  <DialogRoot>
    <DialogTrigger class="bg-blue-500 text-black p-2 rounded-md">Open Dialog </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-black/50" />
      <DialogContent class="bg-white text-black p-2 rounded-md shadow-sm">
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>Dialog Description</DialogDescription>
        <DialogClose class="bg-red-500 text-black p-2 rounded-md"> Close </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
