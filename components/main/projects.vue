<template>
  <section class="app-projects">
    <div class="app-projects__title">
      <h2 class="app-projects__title-content">
        {{ t('projects.title') }}
      </h2>

      <div class="app-projects__title--additional" :class="localeClass" />
    </div>

    <div class="app-projects__list">
      <ui-card
        v-for="project in projectsList"
        :key="project.imageUrl"
        :image-url="project.imageUrl"
        :title="project.title"
        :subtitle="project.subtitle"
        :description="project.description"
        :button-label="t('projects.linkLabel')"
        :url="project.url"
        class="app-projects__list-item"
      >
        <template #image-expand>
          <div class="app-projects__list-item-tags">
            <ui-badge
              v-for="tag in project.tags"
              :key="tag.id"
              :title="tag.label"
              :prepend-icon-name="tag.icon"
            />
          </div>
        </template>
      </ui-card>
    </div>
  </section>
</template>

<script setup lang="ts">
// Utils
import { generateId } from '~/utils/generateId'
// Types & Interfaces
import type { TUiIconNames } from '#build/types/ui-icon'

interface IProductTags {
  id: number | string,
  label: string,
  icon: TUiIconNames,
}

type TProjectItem = {
  imageUrl: string,
  title: string,
  subtitle: string,
  description: string,
  tags: IProductTags[],
  url: string,
}

const { t, locale } = useI18n()

const projectsList = computed<TProjectItem[]>(() => [
  {
    imageUrl: '/images/projects/specto.png',
    title: t('projects.specto.title'),
    subtitle: t('projects.specto.subtitle'),
    description: t('projects.specto.description'),
    tags: [
      {
        id: generateId(),
        label: t('projects.tags.ts'),
        icon: 'brands/typescript',
      },
      {
        id: generateId(),
        label: t('projects.tags.nuxt'),
        icon: 'brands/nuxtjs',
      },
      {
        id: generateId(),
        label: t('projects.tags.nest'),
        icon: 'brands/nestjs',
      },
    ],
    url: 'https://specto.su',
  },
  {
    imageUrl: '/images/projects/any2text.png',
    title: t('projects.any2text.title'),
    subtitle: t('projects.any2text.subtitle'),
    description: t('projects.any2text.description'),
    tags: [
      {
        id: generateId(),
        label: t('projects.tags.laravel'),
        icon: 'brands/laravel',
      },
      {
        id: generateId(),
        label: t('projects.tags.css'),
        icon: 'brands/css3',
      },
      {
        id: generateId(),
        label: t('projects.tags.js'),
        icon: 'brands/javascript',
      },
    ],
    url: 'https://any2text.ru/',
  },
  {
    imageUrl: '/images/projects/primetime.png',
    title: t('projects.primeTime.title'),
    subtitle: t('projects.primeTime.subtitle'),
    description: t('projects.primeTime.description'),
    tags: [
      {
        id: generateId(),
        label: t('projects.tags.ts'),
        icon: 'brands/typescript',
      },
      {
        id: generateId(),
        label: t('projects.tags.vue'),
        icon: 'brands/vuejs',
      },
      {
        id: generateId(),
        label: t('projects.tags.vuetify'),
        icon: 'brands/vuetify',
      },
    ],
    url: 'https://primetime.su',
  },
  {
    imageUrl: '/images/projects/spotyfree.png',
    title: t('projects.spotyFree.title'),
    subtitle: t('projects.spotyFree.subtitle'),
    description: t('projects.spotyFree.description'),
    tags: [
      {
        id: generateId(),
        label: t('projects.tags.ts'),
        icon: 'brands/typescript',
      },
      {
        id: generateId(),
        label: t('projects.tags.nuxt'),
        icon: 'brands/nuxtjs',
      },
      {
        id: generateId(),
        label: t('projects.tags.nest'),
        icon: 'brands/nestjs',
      },
    ],
    url: 'https://github.com/igorproc/iny-music-frontend',
  },
])

const localeClass = computed(() => `--locale-${locale.value}`)
</script>

<style lang="scss">
.app-projects {
  &__title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &-content {
      color: map-get($theme-palette, 'primary');
      font-weight: 800;
    }

    &--additional {
      margin-top: 3rem;
      height: 5rem;
      background-color: map-get($theme-palette, 'primary');

      &.--locale-en {
        width: 40%;
      }

      &.--locale-ru {
        width: 42%;
      }

    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    grid-template-rows: repeat(2, 2fr);
    align-items: flex-start;
    justify-content: space-between;
    gap: 24rem;

    &-item {
      margin-top: 35rem;

      &-tags {
        display: flex;
        align-items: center;
        gap: 8rem;
      }
    }
  }

  @media #{map-get($display-rules, 'sm')} {
    &__title--additional {
      &.--locale-en {
        width: 17%;
      }

      &.--locale-ru {
        width: 18%;
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    &__title {
      &-content {
        font-size: 30rem;
      }

      &--additional {
        &.--locale-en {
          width: 14%;
        }

        &.--locale-ru {
          width: 14.5%;
        }
      }
    }

    &__list {
      margin-top: 80rem;
    }
  }

  @media #{map-get($display-rules, 'lg')} {
    &__title--additional {
      &.--locale-en {
        width: 7%;
      }

      &.--locale-ru {
        width: 10%;
      }
    }

    &__list {
      grid-template-columns: repeat(2, 2fr);
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    &__list {
      gap: 64rem;
    }

    &__title--additional {
      &.--locale-ru {
        width: 7.3%;
      }
    }
  }
}
</style>
