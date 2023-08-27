import { describe, it, expect, beforeEach } from 'vitest'

import DragContainer from '@/components/DragContainer.vue'
import { mount } from '@vue/test-utils'

import { createPinia } from 'pinia'
import { useBlockStore } from '@/stores/blockStore'

describe('DragContainer.vue', () => {
    let pinia: any;

    beforeEach(() => {
        pinia = createPinia();
    })

    it('renders and can add blocks', async () => {
        const wrapper = mount(DragContainer, {
            global: {
                plugins: [pinia],
            },
        });

        const blockStore = useBlockStore();

        // Check if the component renders without blocks initially
        expect(wrapper.findAll('.text-block')).toHaveLength(0);

        // Add a block to the store
        blockStore.addBlock({
            type: 'Text',
            content: 'Sample text',
        });

        // Check that block is rendered
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('.text-block')).toHaveLength(1);
        expect(blockStore.blocks[0].type).toBe('Text');
    })
})