<template>
  <div class="app-logo">
    <span class="app-logo__text">
      beet3R
    </span>
  </div>
</template>

<style lang="scss">
.app-logo {
  &__text {
    font-weight: 800;
    color: map-get($theme-palette, 'primary')
  }

  @media #{map-get($display-rules, 'md')} {
    &__text {
      font-size: 32rem;
    }
  }
}
</style>
