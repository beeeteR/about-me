<template>
  <section class="app-about-me">
    <div class="app-about-me__title">
      <h2 class="app-about-me__title-content">
        {{ t('aboutMe.title') }}
      </h2>

      <div class="app-about-me__title--additional" :class="localeClass" />
    </div>

    <app-about-me-biography class="app-about-me__biography" />
    <app-about-me-key-skills class="app-about-me__key-skills-list" />
    <app-about-me-skills class="app-about-me__skills-list" />
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

const localeClass = computed(() => `--locale-${locale.value}`)
</script>

<style lang="scss">
.app-about-me {
  &__title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &-content {
      color: map-get($theme-palette, 'primary');
      font-weight: 800;
    }

    &--additional {
      height: 5rem;
      background-color: map-get($theme-palette, 'primary');

      &.--locale-en {
        width: 7%;
      }

      &.--locale-ru {
        width: 18%;
      }
    }
  }

  &__biography {
    margin-top: 35rem;
  }

  &__key-skills-list,
  &__skills-list {
    margin-top: 35rem;
  }

  @media #{map-get($display-rules, 'sm')} {
    &__title--additional {
      &.--locale-en {
        width: 12%;
      }
      &.--locale-ru {
        width: 8%;
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    &__title--additional {
      &.--locale-en {
        width: 10.5%;
      }
      &.--locale-ru {
        width: 6.5%;
      }
    }

    &__key-skills-list,
    &__skills-list {
      margin-top: 74rem;
    }
  }

  @media #{map-get($display-rules, 'lg')} {
    &__title--additional {
      &.--locale-en {
        width: 7%;
      }

      &.--locale-ru {
        width: 4.5%;
      }
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    &__title--additional {
      &.--locale-en {
        width: 5%;
      }

      &.--locale-ru {
        width: 3.3%;
      }
    }
  }
}
</style>
