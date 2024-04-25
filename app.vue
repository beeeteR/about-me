<template>
  <div class="app-root" :data-theme="getCurrentTheme.currentTheme">
    <NuxtLayout fallback="default">
      <NuxtPage />
    </NuxtLayout>

    <CommonScope />
  </div>
</template>

<script setup lang="ts">
const { getCurrentTheme } = useThemeProvider()
</script>
