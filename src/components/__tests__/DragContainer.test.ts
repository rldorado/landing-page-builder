import { describe, it, expect, beforeEach } from 'vitest'

import DragContainer from '@/components/DragContainer.vue'
import { mountWithStore } from '@/utils/testUtils'

import { useBlockStore } from '@/stores/blockStore'

describe('DragContainer.vue', () => {
    it('renders and can add blocks', async () => {
        const wrapper = mountWithStore(DragContainer);

        const store = useBlockStore();

        // Add a block to the container
        store.addBlock({
            type: 'Text',
            content: 'Test Block'
        });

        expect(store.blocks).toHaveLength(1);
        expect(store.blocks[0].type).toBe('Text');
    })
})