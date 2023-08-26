<script setup lang="ts">
import { useBlockStore } from '@/stores/blockStore'
import DragContainer from '@/components/DragContainer.vue';

const blockStore = useBlockStore();

const addDefaultBlocks = () => {
  blockStore.addBlock({
    type: 'Text',
    content: 'Default text content',
  });
  blockStore.addBlock({
    type: 'Image',
    content: 'https://picsum.photos/200' // --> default random image
  })
}

</script>

<template>
  <main class="p-4">
    <h1 class="text-2xl mb-4">Vue Landing Page Builder</h1>

    <button
      class="mb-4 px-4 py-2 bg-orange-light text-white rounded"
      @click="addDefaultBlocks"
    >
      Add Default Blocks
    </button>

    <DragContainer />
  </main>
</template>
