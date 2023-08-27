import { describe, it, expect } from 'vitest'

import Image from '@/components/Image.vue'
import { mount } from '@vue/test-utils'

describe('Image.vue', () => {
    it('renders and shows the right image', () => {
        const wrapper = mount(Image, {
            props: {
                content: 'image1.webp'
            }
        });

        const img = wrapper.get('img');
        expect(img.attributes('src')).toBe('image1.webp');
    })
})
