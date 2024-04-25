<template>
  <ui-menu v-model:open="isOpen" class="app-language-switcher language-switcher">
    <template #activator>
      <button
        aria-label="Click here for change language"
        class="app-language-switcher__action"
        @click="isOpen = !isOpen"
      >
        <span class="app-language-switcher__action-label">
          {{ locale }}
        </span>
      </button>
    </template>

    <div class="app-language-switcher__menu">
      <button
        v-for="availableLocale in locales"
        :key="availableLocale.code"
        :aria-label="getAriaText(availableLocale.code)"
        class="app-language-switcher__menu-item"
        @click="changeLocale(availableLocale.code)"
      >
        <span class="app-language-switcher__menu-item-label">
          {{ availableLocale.code }}
        </span>
      </button>
    </div>
  </ui-menu>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const isOpen = ref(false)

const changeLocale = async (selectedLocaleCode: string) => {
  await setLocale(selectedLocaleCode)
  isOpen.value = false
}

const getAriaText = (code: string) => {
  return `Click to switch on ${code} locale`
}
</script>

<style lang="scss">
.app-language-switcher {
  &__action {
    &-label {
      font-weight: bold;
      color: map-get($theme-palette, 'primary');
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    &-item {
      padding: 8rem 32rem;

      &-label {
        font-weight: bold;
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    &__action {
      padding: 8rem 16rem;

      &-label {
        font-size: 20rem;
      }
    }

    &__menu {
      &__action {
        padding: 12rem 8rem;
      }
    }
  }
}
</style>
