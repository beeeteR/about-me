<template>
  <div class="ui-badge">
    <ui-icon
      v-if="prependIconName"
      filled
      :name="prependIconName"
      class="ui-badge__prepend-icon"
    />

    <span class="ui-badge__title">
      {{ title }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { TUiIconNames } from '#build/types/ui-icon'

interface Props {
  title: string,
  prependIconName?: TUiIconNames
}

const props = defineProps<Props>()

const { title, prependIconName } = toRefs(props)
</script>

<style lang="scss">
.ui-badge {
  background-color: map-get($theme-palette, 'background');
  border: 1rem solid map-get($theme-palette, 'background');
  border-radius: 12rem;
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  &__prepend-icon {
    margin-bottom: 3rem;
  }

  &__title {
    color: map-get($theme-palette, 'primary');
    font-size: 12rem;
    font-weight: 800;
  }
}
</style>
