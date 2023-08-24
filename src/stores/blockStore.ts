import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Block {
    type: string;
    content: string;
}

export const useBlockStore = defineStore('block', () => {
    const blocks = ref<Block[]>([]);

    const addBlock = (block: Block) => {
        blocks.value.push(block);
    }
    const deleteBlock = (index: number) => {
        blocks.value.splice(index, 1);
    }
});
