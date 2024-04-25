<template>
  <section class="app-main-banner">
    <div class="app-main-banner__spacer" />
    <h1 class="app-main-banner__title">
      {{ t('main.title') }}
    </h1>
    <div
      class="app-main-banner__theme-changer"
    >
      <common-theme-changer />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style lang="scss">
.app-main-banner {
  height: 250rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__spacer {
    display: none;
  }

  &__title {
    width: 100%;
    text-align: center;
    color: map-get($theme-palette, 'primary');
    font-family: $display-font;
    font-weight: normal;
  }

  &__theme-changer {
    display: none;
  }

  @media #{map-get($display-rules, 'md')} {
    height: 450rem;

    &__spacer {
      display: block;
    }

    &__title {
      width: auto;
      font-size: 45rem;
    }

    &__theme-changer {
      margin-bottom: calc(10vh + 93rem);
      display: block;
      writing-mode: vertical-lr;
      rotate: 180deg;
      align-self: flex-end;
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    height: 650rem;
  }
}
</style>
