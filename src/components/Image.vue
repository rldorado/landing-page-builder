<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    content: string,
}>();

defineEmits(['delete', 'duplicate']);

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const selectedImage = ref(props.content || images[0]);
</script>

<template>
    <div class="image-block border border-green-light p-4 m-2">
        <img :src="selectedImage" alt="Selected" class="mb-2" />
        <select v-model="selectedImage" class="mb-2 border rounded px-2 py-1">
            <option v-for="image in images" :key="image" :value="image">
                {{ image }}
            </option>
            <button class="px-2 py-1 bg-red text-white rounded" @click="$emit('delete')">Delete</button>
            <button class="px-2 py-1 bg-green text-white rounded ml-2" @click="$emit('duplicate')">Duplicate</button>
        </select>
    </div>
</template>