<script setup lang="ts">
const isOpen = ref(false);

const chapters = [
  {
    tone: "emerald",
    icon: "i-lucide-trees",
    title: "Massive Schäden im Ökosystem",
    to: "/oekosystem-shaden-sexau",
  },
  {
    tone: "cyan",
    icon: "i-lucide-bug",
    title: "Der Dohlenkrebs – vom Aussterben bedroht",
    to: "/dohlenkrebs-aussterben-sexau",
  },
  {
    tone: "orange",
    icon: "i-lucide-landmark",
    title: "Die Hochburg – Kulturdenkmal",
    to: "/hochburg-kulturdenkmal",
  },
  {
    tone: "indigo",
    icon: "i-lucide-sun",
    title: "Schattenwurfprognose – unvollständig",
    to: "/schattenwurfprognose-unvollstaendig",
  },
  {
    tone: "rose",
    icon: "i-lucide-hammer",
    title: "Rückbau – nur unvollständig",
    to: "/rueckbau-unvollstaendig",
  },
  {
    tone: "slate",
    icon: "i-lucide-volume-2",
    title: "Schall und Infraschall",
    to: "/schall-infraschall",
  },
  {
    tone: "amber",
    icon: "i-lucide-home",
    title: "Immobilienwerte & Tourismus",
    to: "/sinkender-tourismus",
  },
  {
    tone: "red",
    icon: "i-lucide-shield-alert",
    title: "Risiken für die Gemeinde Sexau",
    to: "/risiken-gemeinde-sexau",
  },
  {
    tone: "sky",
    icon: "i-lucide-activity",
    title: "Stromnetz – nicht geeignet",
    to: "/stromnetz-nicht-geeignet-erneuerbare",
  },
  {
    tone: "violet",
    icon: "i-lucide-scale",
    title: "EEG – wie lange noch?",
    to: "/eeg-wie-lange-noch",
  },
];

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
