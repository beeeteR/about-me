<template>
  <header class="app-header">
    <common-logo />

    <div class="app-header__actions">
      <common-language-switcher class="app-header__actions-language-switcher" />
      <button
        aria-label="Click to change current theme"
        class="app-header__actions-change-theme"
        @click="theme.changeTheme"
      >
        <ui-icon :name="themeIcon" :size="22" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const theme = useThemeProvider()

const themeIcon = computed(() => {
  if (theme.getCurrentTheme.value.currentTheme === 'dark') {
    return 'common/sun'
  }
  return 'common/moon'
})
</script>

<style lang="scss">
.app-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 16rem 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  background: map-get($theme-palette, 'background');
  border-bottom: 1rem solid #cccccc55;

  &__actions {
    display: flex;
    align-items: center;
    gap: 8rem;

    &-change-theme {
      margin-bottom: 4rem;
      .ui-icon {
        color: map-get($theme-palette, 'primary');
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    padding: 24rem 0;
    left: 65rem;
    right: 65rem;

    &__actions-change-theme {
      display: none;
    }
  }
}
</style>
