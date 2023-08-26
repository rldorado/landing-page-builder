<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    content: string,
}>();

defineEmits(['delete', 'duplicate']);

const images = [
    `image1.webp`,
    `image2.webp`,
    `image3.webp`
];
const selectedImage = ref(props.content || images[0]);
</script>

<template>
    <div class="image-block border border-purple-light p-4 m-2">
        <img :src="selectedImage" alt="Selected" class="mb-2">
        <select v-model="selectedImage" class="flex mb-2 border rounded px-2 py-1">
            <option v-for="image in images" :key="image" :value="image">
                {{ image }}
            </option>
        </select>
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