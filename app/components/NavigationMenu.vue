<script setup lang="ts">
import { chapters } from '~/composables/chapters'
const isOpen = ref(false);



const menuItems = [chapters.map(chapter => ({ label: chapter.title, to: chapter.to }))];
</script>

<template>
  <!-- Desktop Dropdown -->
  <div class="hidden md:block">
    <UDropdownMenu :items="menuItems">
      <UButton icon="i-lucide-book-open" trailing color="info" variant="ghost">
        Kapitel
      </UButton>
    </UDropdownMenu>
  </div>

  <!-- Mobile Menu -->
  <div class="md:hidden">
    <UButton 
      icon="i-lucide-menu" 
      color="primary" 
      variant="ghost"
      aria-label="Navigation Menü öffnen"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    />
    
    <UCard v-if="isOpen" role="navigation" aria-label="Kapitel Navigation" class="absolute top-14 left-0 right-0 rounded-none border-b border-l border-r border-gray-200 dark:border-gray-800 z-50">
      <ul class="space-y-2">
        <li v-for="chapter in chapters" :key="chapter.to">
          <NuxtLink 
            :to="chapter.to"
            class="block px-4 py-2 text-sm rounded hover:bg-primary-50 dark:hover:bg-primary-950 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            @click="isOpen = false"
          >
            {{ chapter.title }}
          </NuxtLink>
        </li>
      </ul>
    </UCard>
  </div>
</template>
