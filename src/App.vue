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
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
    <h1 class="text-2xl font-bold mb-2">Vue Landing Page Builder</h1>
    <p class="mb-5">Drag and drop blocks to design your page. Create default blocks to play with.</p>

    <button
      class="mb-4 px-4 py-2 bg-orange-light text-white rounded"
      @click="addDefaultBlocks"
    >
      Add Default Blocks
    </button>

    <DragContainer />
  </main>
</template>
