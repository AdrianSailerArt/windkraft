<!-- components/AssetImageViewer.vue -->
<script setup lang="ts">
type Props = {
    /** e.g. "/images/foo.jpg" or "https://..." */
    src: string;
    alt?: string;
    /** nuxt-image preset name (optional) */
    preset?: string;
    /** aspect ratio like "16/9" or "1/1" (optional) */
    ratio?: string;
    /** sizes attribute for responsive images (optional) */
    sizes?: string;
    /** quality 1-100 (optional) */
    quality?: number;
};

const props = withDefaults(defineProps<Props>(), {
    src: '',
    alt: '',
    preset: undefined,
    ratio: undefined,
    sizes: '100vw',
    quality: 80
});

const isOpen = ref(false);

function open() {
    isOpen.value = true;
}
function close() {
    isOpen.value = false;
}

function onKeydown(e: KeyboardEvent) {
    if (!isOpen.value) return;
    if (e.key === 'Escape') close();
}

onMounted(() => window.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown));
</script>

<template>
    <div class="w-full">
      
        <!-- Preview -->
        <button
            type="button"
            class="group relative block w-full overflow-hidden rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-white/60 dark:bg-gray-950/30 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            @click="open"
            :aria-label="alt || 'Bild öffnen'"
        >
            <div class="relative w-full" :class="ratio ? '' : 'aspect-[16/9]'" :style="ratio ? { aspectRatio: ratio } : undefined">
              
                <NuxtImg
                    :src="src"
                    :alt="alt"
                    class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    :preset="preset"
                    :sizes="sizes"
                    :quality="quality"
                    loading="lazy"
                />
            </div>

            <!-- hover affordance -->
            <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div class="absolute bottom-3 left-3 rounded-xl bg-black/45 px-3 py-1.5 text-xs text-white">Klick für Vollbild</div>
            </div>
        </button>

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
                <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" @click.self="close">
                    <div class="relative w-full max-w-6xl">
                        <!-- Close button -->
                        <button
                            type="button"
                            class="absolute -top-12 right-0 rounded-xl bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            @click="close"
                        >
                            Schließen (Esc)
                        </button>

                        <div class="relative overflow-hidden rounded-2xl">
                            <NuxtImg :src="src" :alt="alt" class="max-h-[85vh] w-full object-contain bg-black" :preset="preset" :sizes="'100vw'" :quality="quality" />
                        </div>

                        <p v-if="alt" class="mt-3 text-center text-sm text-white/80">
                            {{ alt }}
                        </p>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>
