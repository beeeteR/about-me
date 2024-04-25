<template>
  <div class="app-biography">
    <img alt="pr0s1k" src="/images/me.png" class="app-biography__image">

    <div class="app-biography__content">
      <h3 class="app-biography__content-name">
        {{ t('aboutMe.biography.name') }}
      </h3>

      <p class="app-biography__content-description">
        {{ t('aboutMe.biography.description') }}
      </p>

      <div class="app-biography__content-link-list link-list">
        <a
          v-for="link in biographyLinkList"
          :key="link.id"
          :href="link.link"
          target="_blank"
          class="link-list__item"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Utils
import { generateId } from '~/utils/generateId'

const { t } = useI18n()

const biographyLinkList = reactive([
  {
    id: generateId(),
    label: 'telegram',
    link: t('aboutMe.biography.linkList.telegram'),
  },
  {
    id: generateId(),
    label: 'email',
    link: t('aboutMe.biography.linkList.email'),
  },
  {
    id: generateId(),
    label: 'cv',
    link: t('aboutMe.biography.linkList.cv'),
  },
])
</script>

<style lang="scss">
.app-biography {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__image {
    object-fit: cover;
    border-radius: 50%;
    width: 200rem;
    height: 200rem;
  }

  &__content {
    margin-top: 35rem;
    max-width: 80%;
    text-align: center;

    &-name {
      font-size: 24rem;
      color: map-get($theme-palette, 'primary');
      font-weight: normal;
    }

    &-description {
      margin-top: 16rem;
      color: map-get($theme-palette, 'primary');
      font-size: 14rem;
      font-weight: bold;
    }

    &-link-list {
      margin-top: 16rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 8rem;

      .link-list__item {
        color: map-get($theme-palette, 'primary');
        font-size: 12rem;
        font-weight: normal;
        text-transform: uppercase;
        text-decoration: unset;
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    padding: 55rem 110rem;
    flex-direction: row;
    gap: 82rem;

    &__image {
      width: 200rem;
      height: 200rem;
    }

    &__content {
      max-width: 55%;
      text-align: unset;

      &-name {
        font-size: 28rem
      }

      &-description {
        font-size: 16rem;
      }

      &-link-list {
        justify-content: flex-start;

        .link-list__item {
          font-size: 16rem;
        }
      }
    }
  }

  @media #{map-get($display-rules, 'lg')} {
    &__content {
      max-width: 65%;
    }
  }
}
</style>
