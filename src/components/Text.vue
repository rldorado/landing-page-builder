<script setup lang="ts">
defineProps<{
    content: string,
}>();

defineEmits(['delete', 'duplicate']);
</script>

<template>
    <div class="text-block bg-white shadow-lg p-4 m-2 rounded-lg border-2 border-dashed border-transparent hover:border-blue">
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
                <FontAwesomeIcon icon="fas fa-trash" /> Delete
            </button>
            <button 
                class="px-2 py-1 bg-green text-white rounded ml-2"
                @click="$emit('duplicate')">
                <FontAwesomeIcon icon="fas fa-clone" /> Duplicate
            </button>
        </div>

    </div>
</template>