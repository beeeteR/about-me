<template>
  <div class="ui-message">
    <div v-if="prependIcon" class="ui-message__prepend-icon">
      <ui-icon :name="prependIcon" :size="iconSize || 16" />
    </div>

    <div class="ui-message__divider" />

    <div class="ui-message__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Types & Interfaces
import type { TUiIconNames } from '#build/types/ui-icon'

interface Props {
  prependIcon?: TUiIconNames,
  iconSize?: number | string
}

const props = defineProps<Props>()
</script>

<style lang="scss">
.ui-message {
  padding: 15rem 20rem;
  display: flex;
  align-items: center;
  gap: 16rem;

  background-color: transparent;
  border: 1rem solid map-get($theme-palette, 'primary');
  border-radius: 8rem;

  &__divider {
    display: none;
  }

  @media #{map-get($display-rules, 'sm')} {
    gap: 8rem;

    &__divider {
      display: block;
      height: 100%;
      margin: 0 15rem;
      border-left: 1rem solid map-get($theme-palette, 'primary');
    }
  }
}
</style>
