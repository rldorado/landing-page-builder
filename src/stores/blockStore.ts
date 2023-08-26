import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Block {
    type: string;
    content: string;
}

export const useBlockStore = defineStore('block', () => {
    
    // STATE
    
    const blocks = ref<Block[]>([
        {
          type: 'Text',
          content: 'Sample Text Block 1'
        },
        {
          type: 'Image',
          content: 'https://picsum.photos/200'
        },
        {
          type: 'Text',
          content: 'Sample Text Block 2'
        },
        {
          type: 'Image',
          content: 'https://picsum.photos/200'
        }
    ]);

    // ACTIONS

    const addBlock = (block: Block) => {
        blocks.value.push(block);
    }
    const deleteBlock = (index: number) => {
        if (index >= 0 && index < blocks.value.length) {
            blocks.value.splice(index, 1);
        }
    }
    const updateBlockContent = (index: number, newContent: string) => {
        if (index >= 0 && index < blocks.value.length) {
            blocks.value[index].content = newContent;
        }
    }

    const duplicateBlock = (index: number) => {
        if (index >= 0 && index < blocks.value.length) {
            const duplicatedBlock = { ...blocks.value[index] };
            blocks.value.splice(index + 1, 0, duplicatedBlock);
        }
    }

    // GETTERS

    const totalBlocks = () : number => blocks.value.length;

    return {
        blocks,
        addBlock,
        deleteBlock,
        updateBlockContent,
        duplicateBlock,
        totalBlocks,
    }
});
