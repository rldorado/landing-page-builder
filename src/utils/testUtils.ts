import { createPinia } from 'pinia'

import { mount } from '@vue/test-utils'

export const mountWithStore = (component: any, options: any = {}) => {
    const pinia = createPinia();
    
    return mount(component, {
        global: { plugins: [pinia] },
        ...options,
    });
}