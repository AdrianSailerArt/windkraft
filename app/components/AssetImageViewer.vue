<script setup lang="ts">
import { NuxtImg } from '#components'

type Props = {
  /** e.g. "/03.jpg" or "https://..." */
  src: string
  alt?: string

  /** Optional title shown in fullscreen and below image */
  title?: string

  /** Optional caption / image caption / credit */
  caption?: string

  /** nuxt-image preset name (optional, only for non-public images) */
  preset?: string

  /** sizes attribute for responsive images (optional) */
  sizes?: string

  /** quality 1-100 (optional) */
  quality?: number
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  title: undefined,
  caption: undefined,
  preset: undefined,
  sizes: '100vw',
  quality: 80
})

const isOpen = ref(false)

/**
 * public/ assets should NEVER go through NuxtImg (IPX),
 * otherwise dev/prod behavior differs.
 */
const isPublicAsset = computed(() =>
  props.src.startsWith('/')
)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <figure class="w-full">
    <!-- Preview -->
    <button
      type="button"
      class="group relative block w-full overflow-hidden rounded-2xl
             border border-gray-200/70 dark:border-gray-800/70
             bg-gray-50 dark:bg-gray-950/40 shadow-sm
             focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
      :aria-label="alt || title || 'Bild vergrößert anzeigen'"
      @click="open"
    >
      <div class="relative flex w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
        <component
          :is="isPublicAsset ? 'img' : NuxtImg"
          :src="src"
          :alt="alt"
          class="max-h-[70vh] w-auto max-w-full object-contain
                 transition-transform duration-300 group-hover:scale-[1.01]"
          :preset="!isPublicAsset ? preset : undefined"
          :sizes="!isPublicAsset ? sizes : undefined"
          :quality="!isPublicAsset ? quality : undefined"
          loading="lazy"
        />
      </div>

      <!-- Hover affordance -->
      <div
        class="pointer-events-none absolute inset-0 opacity-0
               transition-opacity group-hover:opacity-100"
      >
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0" />
        <div class="absolute bottom-3 left-3 rounded-xl bg-black/45 px-3 py-1.5 text-xs text-white">
          Klick für Vollbild
        </div>
      </div>
    </button>

    <!-- Caption below preview -->
    <figcaption
      v-if="title || caption"
      class="mt-2 text-sm text-gray-600 dark:text-gray-400"
    >
      <strong
        v-if="title"
        class="block font-medium text-gray-900 dark:text-gray-100"
      >
        {{ title }}
      </strong>
      <span v-if="caption">
        {{ caption }}
      </span>
    </figcaption>

    <!-- Fullscreen overlay -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          @click.self="close"
        >
          <div class="relative w-full max-w-7xl">
            <!-- Close button -->
            <button
              type="button"
              aria-label="Vollbild schließen (Escape-Taste)"
              class="absolute -top-12 right-0 rounded-xl bg-white/10
                     px-3 py-2 text-sm text-white hover:bg-white/15
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              @click="close"
            >
              Schließen (Esc)
            </button>

            <div class="flex items-center justify-center bg-black rounded-2xl">
              <component
                :is="isPublicAsset ? 'img' : NuxtImg"
                :src="src"
                :alt="alt"
                class="max-h-[85vh] max-w-full object-contain"
                :preset="!isPublicAsset ? preset : undefined"
                :sizes="!isPublicAsset ? '100vw' : undefined"
                :quality="!isPublicAsset ? quality : undefined"
              />
            </div>

            <!-- Fullscreen meta -->
            <div
              v-if="title || caption"
              class="mt-4 text-center text-sm text-white/80"
            >
              <p v-if="title" class="font-medium text-white">
                {{ title }}
              </p>
              <p v-if="caption" class="mt-1">
                {{ caption }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </figure>
</template>