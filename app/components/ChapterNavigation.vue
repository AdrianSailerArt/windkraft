<script setup lang="ts">
const { previous, next } = useChaptersNavigation()

function go(to?: string) {
  if (!to) return
  navigateTo(to)
}
</script>

<template>
  <nav class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <!-- Previous -->
    <UCard
      v-if="previous"
      role="link"
      tabindex="0"
      :ui="{ body: 'p-5' }"
      class="group h-full cursor-pointer transition
             hover:shadow-lg
             focus-visible:outline-none
             focus-visible:ring-2
             focus-visible:ring-primary"
      @click="go(previous.to)"
      @keydown.enter.space.prevent="go(previous.to)"
    >
      <div class="flex h-full items-center gap-4">
        <UIcon
          name="i-lucide-arrow-left"
          class="text-xl opacity-60 transition
                 group-hover:opacity-100
                 group-hover:-translate-x-0.5"
        />

        <div>
          <p class="text-xs uppercase tracking-wide opacity-60">
            Vorheriges Kapitel
          </p>

          <h3 class="font-semibold leading-tight">
            {{ previous.title }}
          </h3>

          <p class="mt-1 text-sm opacity-70">
            {{ previous.subtitle }}
          </p>
        </div>
      </div>
    </UCard>

    <!-- Platzhalter -->
    <div v-else class="hidden sm:block" />

    <!-- Next -->
    <UCard
      v-if="next"
      role="link"
      tabindex="0"
      :ui="{ body: 'p-5' }"
      class="group h-full cursor-pointer transition text-right
             hover:shadow-lg
             focus-visible:outline-none
             focus-visible:ring-2
             focus-visible:ring-primary"
      @click="go(next.to)"
      @keydown.enter.space.prevent="go(next.to)"
    >
      <div class="flex h-full items-center justify-end gap-4">
        <div>
          <p class="text-xs uppercase tracking-wide opacity-60">
            Nächstes Kapitel
          </p>

          <h3 class="font-semibold leading-tight">
            {{ next.title }}
          </h3>

          <p class="mt-1 text-sm opacity-70">
            {{ next.subtitle }}
          </p>
        </div>

        <UIcon
          name="i-lucide-arrow-right"
          class="text-xl opacity-60 transition
                 group-hover:opacity-100
                 group-hover:translate-x-0.5"
        />
      </div>
    </UCard>
  </nav>
</template>