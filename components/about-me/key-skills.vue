<template>
  <div class="app-key-skills-list">
    <ui-message
      v-for="keySkill in keySkillsList"
      :key="keySkill.id"
      :prepend-icon="keySkill.prependIcon"
      icon-size="32"
      class="app-key-skills-list__item"
    >
      <div class="app-key-skills-list__item-content item-content">
        <h4 class="item-content__title">
          {{ keySkill.label }}
        </h4>
        <p class="item-content__description">
          {{ keySkill.description }}
        </p>
      </div>
    </ui-message>
  </div>
</template>

<script setup lang="ts">
// Utils
import { generateId } from '~/utils/generateId'
// Types & Interfaces
import type { TUiIconNames } from '#build/types/ui-icon'

type TKeySkillItem = {
  id: string,
  prependIcon: TUiIconNames,
  label: string,
  description: string
}

const keySkillsList: TKeySkillItem[] = [
  {
    id: generateId(),
    prependIcon: 'common/management',
    label: 'Management',
    description: '',
  },
  {
    id: generateId(),
    prependIcon: 'common/html',
    label: 'HTML & CSS',
    description: '',
  },
  {
    id: generateId(),
    prependIcon: 'common/frontend',
    label: 'Vue 3',
    description: '',
  },
  {
    id: generateId(),
    prependIcon: 'common/backend',
    label: 'Nuxt 3',
    description: '',
  }
]
</script>

<style lang="scss">
.app-key-skills-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16rem;

  &__item {
    width: 100%;

    .item-content__title {
      color: map-get($theme-palette, 'primary');
      font-size: 16rem;
    }

    .item-content__description {
      color: map-get($theme-palette, 'primary');
      font-size: 12rem;
    }
  }

  @media #{map-get($display-rules, 'sm')} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    &__item {
      width: 42%;
    }
  }

  @media #{map-get($display-rules, 'md')} {
    align-items: flex-start;
    gap: 32rem;

    &__item {
      height: 100rem;
      max-width: 278rem;
    }
  }
}
</style>
