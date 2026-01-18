<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Branding -->
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Windkraft Sexau
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Eine Petition für nachhaltiges Denken im Peterswald
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
            Seiten
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Startseite
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/impressum" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Impressum
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/datenschutz" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Datenschutz
              </NuxtLink>
            </li>
          </ul>
        </div>

       
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
        <p class="text-xs text-gray-600 dark:text-gray-400 text-center">
          © {{ new Date().getFullYear() }} Windkraft Sexau • Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  </footer>
</template>
