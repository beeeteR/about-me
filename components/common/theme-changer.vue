<template>
  <button
    aria-label="Click to change current theme"
    class="app-theme-changer"
    @click="changeTheme"
  >
    <span class="app-theme-changer__label">
      {{ buttonLabel }}
    </span>
  </button>
</template>

<script setup lang="ts">
const { changeTheme, getCurrentTheme } = useThemeProvider()

const buttonLabel = computed(() => `${getCurrentTheme.value.nextTheme} mode.`)
</script>

<style lang="scss">
.app-theme-changer {
  height: 100rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &__label {
    font-weight: 800;
    color: map-get($theme-palette, 'primary');
  }

  @media #{map-get($display-rules, 'md')} {
    &__label {
      font-size: 14rem;
    }
  }
}
</style>
