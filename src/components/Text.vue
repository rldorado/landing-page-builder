<script setup lang="ts">
defineProps<{
    content: string,
}>();

defineEmits(['delete', 'duplicate']);
</script>

<template>
    <div class="text-block border border-blue-light p-4 m-2">
        <div
            contenteditable="true"
            :textContent="content"
            @input="(newValue) => $emit('update:content', newValue)"
            class="mb-2"
        ></div>
        <div>
            <button
                class="px-2 py-1 bg-red text-white rounded"
                @click="$emit('delete')">
                Delete
            </button>
            <button 
                class="px-2 py-1 bg-green text-white rounded ml-2"
                @click="$emit('duplicate')">
                Duplicate
            </button>
        </div>

    </div>
</template>