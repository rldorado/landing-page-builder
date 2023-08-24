<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Draggable from 'vuedraggable'
import { useBlockStore } from '@/stores/blockStore';

const store = useBlockStore();
const { blocks } = storeToRefs(store);
const { deleteBlock } = store;
</script>

<template>
    <Draggable v-model="blocks" item-key="id" class="space-y-4">
        <template #item={block}>
            <component
                :is="block.type"
                :content="block.content"
                @delete="deleteBlock(block.id)"
            />
        </template>
    </Draggable>
    <button class="mt-4 px-4 py-2 bg-blue-dark text-white rounded">Save</button>
</template>