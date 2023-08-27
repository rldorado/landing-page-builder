<script setup lang="ts">
import { ref, watchEffect } from 'vue'

interface Props {
    type: string;
    message: string;
    duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'success',
    duration: 3000, // 3 seconds
});

const visible = ref<boolean>(true);

const closeAlert = () => {
    visible.value = false;
}

const alertClass = ref({
    'bg-green-light border-green text-white': props.type === 'success',
    'bg-red-light border-red text-white': props.type === 'error',
});

watchEffect(() => {
    setTimeout(() => {
        closeAlert();
    }, props.duration);
});
</script>

<template>
    <div
        v-if="visible"
        :class="[
            alertClass,
            'border-1-4 p-4 mt-4'
        ]"
        @click="closeAlert"
    >
        {{ message }}
        <button class="float-right text-white">x</button>
    </div>
</template>