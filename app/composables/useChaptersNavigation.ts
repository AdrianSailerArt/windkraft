import { chapters } from "~/composables/chapters"
import { useRoute } from "#app"

export function useChaptersNavigation() {
  const route = useRoute()

  const currentIndex = computed(() =>
    chapters.findIndex(chapter => chapter.to === route.path)
  )

  const current = computed(() =>
    currentIndex.value !== -1 ? chapters[currentIndex.value] : null
  )

  const previous = computed(() =>
    currentIndex.value > 0 ? chapters[currentIndex.value - 1] : null
  )

  const next = computed(() =>
    currentIndex.value !== -1 && currentIndex.value < chapters.length - 1
      ? chapters[currentIndex.value + 1]
      : null
  )

  return {
    chapters,
    current,
    previous,
    next,
    currentIndex,
  }
}