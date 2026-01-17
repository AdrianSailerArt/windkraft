<!-- components/KpiBadge.vue -->
<script setup lang="ts">
    type Tone = 'rose' | 'amber' | 'emerald' | 'gray'
    
    const props = defineProps<{
      tone: Tone
      title: string
      subtitle: string
    }>()
    
    const toneClasses: Record<Tone, string> = {
      amber:
        'border-amber-200/60 bg-gradient-to-b from-amber-50/70 to-white ' +
        'dark:border-amber-900/35 dark:from-amber-950/18 dark:to-gray-950/10',
      emerald:
        'border-emerald-200/60 bg-gradient-to-b from-emerald-50/70 to-white ' +
        'dark:border-emerald-900/35 dark:from-emerald-950/16 dark:to-gray-950/10',
      rose:
        'border-rose-200/60 bg-gradient-to-b from-rose-50/65 to-white ' +
        'dark:border-rose-900/35 dark:from-rose-950/16 dark:to-gray-950/10',
      gray:
        'border-gray-200/60 bg-gradient-to-b from-gray-50/80 to-white ' +
        'dark:border-gray-800/60 dark:from-gray-950/20 dark:to-gray-950/10'
    }
    
    const dotClasses: Record<Tone, string> = {
      amber: 'bg-amber-400/55 dark:bg-amber-500/30',
      emerald: 'bg-emerald-400/55 dark:bg-emerald-500/28',
      rose: 'bg-rose-400/55 dark:bg-rose-500/28',
      gray: 'bg-gray-400/45 dark:bg-gray-500/22'
    }
    </script>
    
    <template>
      <div
        class="relative overflow-hidden rounded-2xl border p-4 shadow-sm"
        :class="toneClasses[tone]"
      >
        <div aria-hidden="true" class="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl" :class="dotClasses[tone]" />
        <div class="relative">
          <div class="flex items-center gap-2">
           
        
          </div>
    
          <div class="mt-2 text-xl font-extrabold leading-none text-gray-900 dark:text-gray-100">
            <span v-html="title" />
          </div>
          <div class="mt-1 text-xs font-semibold text-gray-600 dark:text-gray-300">
            <span v-html="subtitle" />
          </div>
        </div>
      </div>
    </template>
    