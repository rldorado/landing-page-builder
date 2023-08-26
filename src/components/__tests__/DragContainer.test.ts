import { describe, it, expect, beforeEach } from 'vitest'

import DragContainer from '@/components/DragContainer.vue'
import { mount } from '@vue/test-utils'

import { createPinia } from 'pinia'
import { useBlockStore } from '@/stores/blockStore'

describe('DragContainer.vue', () => {
    let pinia : any;

    beforeEach(() => {
        pinia = createPinia();
    })

    it('renders and can add blocks', async () => {
        const wrapper = mount(DragContainer, { global: { plugins: [pinia] } });

        const store = useBlockStore();

        // Add a block to the container
        store.addBlock({ type: 'Text', content: 'Test Block' });

        expect(store.blocks).toHaveLength(1);
        expect(store.blocks[0].type).toBe('Text');
    })
})