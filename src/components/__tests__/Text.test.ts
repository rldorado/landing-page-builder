import { describe, it, expect } from 'vitest'

import Text from '@/components/Text.vue'
import { mount } from '@vue/test-utils'

describe('Text.vue', () => {
  it('renders and allows text content editing', () => {
    const wrapper = mount(Text, {
      props: {
        content: 'Sample Text'
      }
    })
    
    const textBlock = wrapper.get('[contenteditable="true"]')
    expect(textBlock.text()).toBe('Sample Text')
  })
})