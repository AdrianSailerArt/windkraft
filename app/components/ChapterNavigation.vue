<script setup lang="ts">
const { previous, next } = useChaptersNavigation()
</script>

<template>
  <nav class="grid gap-4 sm:grid-cols-2">
    <!-- Previous -->
    <NuxtLink
      v-if="previous"
      :to="previous.to"
      class="group"
    >
      <UCard
        :ui="{ body: 'p-4' }"
        class="transition hover:shadow-lg"
      >
        <div class="flex items-center gap-3">
          <UIcon
            name="i-lucide-arrow-left"
            class="text-xl opacity-60 group-hover:opacity-100"
          />
          <div>
            <p class="text-xs uppercase opacity-60">
              Vorheriges Kapitel
            </p>
            <h3 class="font-semibold">
              {{ previous.title }}
            </h3>
            <p class="text-sm opacity-70">
              {{ previous.subtitle }}
            </p>
          </div>
        </div>
      </UCard>
    </NuxtLink>
    <div v-else></div>

    <!-- Next -->
    <NuxtLink
      v-if="next"
      :to="next.to"
      class="group text-right"
    >
      <UCard
        :ui="{ body: 'p-4' }"
        class="transition hover:shadow-lg"
      >
        <div class="flex items-center justify-end gap-3">
          <div>
            <p class="text-xs uppercase opacity-60">
              Nächstes Kapitel
            </p>
            <h3 class="font-semibold">
              {{ next.title }}
            </h3>
            <p class="text-sm opacity-70">
              {{ next.subtitle }}
            </p>
          </div>
          <UIcon
            name="i-lucide-arrow-right"
            class="text-xl opacity-60 group-hover:opacity-100"
          />
        </div>
      </UCard>
    </NuxtLink>
  </nav>
</template>