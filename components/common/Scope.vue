<template>
  <section class="app-common-scope">
    <nuxt-loading-indicator
      :throttle="0"
      :duration="5e3"
      :color="indicatorColor"
    />
  </section>
</template>

<script lang="ts" setup>
import { useThemeProvider } from '~/composables/useThemeProvider'

const themeProvider = useThemeProvider()
const indicatorColor = computed(() => {
  if (themeProvider.getCurrentTheme.value.currentTheme === 'dark') {
    return 'white'
  }
  return 'black'
})
</script>
