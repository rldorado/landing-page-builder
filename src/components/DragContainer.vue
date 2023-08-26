<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Draggable from 'vuedraggable'
import { useBlockStore } from '@/stores/blockStore';
import Text from '@/components/Text.vue';
import Image from '@/components/Image.vue';

const store = useBlockStore();
const { blocks } = storeToRefs(store);
const { deleteBlock, duplicateBlock } = store;

const exportToJSON = () => {
    console.log(JSON.stringify(blocks.value));
}

const getBlockComponent = (type : string) => {
    const blockComponent : any = {
        'Text': Text,
        'Image': Image,
    }
    return blockComponent[type];
}

</script>

<template>
    <Draggable
        v-model="blocks"
        item-key="id"
        class="space-y-4"
    >
        <template #item={element,index}>
            <component
                :is="getBlockComponent(element?.type)"
                :content="element?.content"
                @delete="deleteBlock(index)"
                @duplicate="duplicateBlock(index)"
            />
        </template>
    </Draggable>
    <button
        class="mt-4 px-4 py-2 bg-blue-dark text-white rounded"
        @click="exportToJSON">
        Save
    </button>
</template>