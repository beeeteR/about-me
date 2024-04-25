<template>
  <aside class="app-navigation">
    <template v-for="link in linksList" :key="link">
      <div v-if="!link.disabled" class="app-navigation__item">
        <nuxt-link
          :to="link.link"
          class="app-navigation__item-link"
          @click.capture.prevent="scrollToBlock(link.key)"
        >
          {{ link.name }}
        </nuxt-link>
        <div
          v-if="link.active"
          class="app-navigation__item-active"
        />
      </div>
    </template>
  </aside>
</template>

<script setup lang="ts">
import { ENavigationVisibleItems, type TNavigationVisibleItemsCondition } from '~/shared/constants/navigation'
import { type RouterLinkProps } from "#vue-router"

const { t } = useI18n()
const { $bus } = useNuxtApp()

type TNavigationItem = {
  key: TNavigationVisibleItemsCondition,
  name: string,
  link: RouterLinkProps['to'],
  active: boolean,
  disabled?: boolean
}

const linksList = ref<TNavigationItem[]>([
  {
    key: ENavigationVisibleItems.home,
    name: t('navigation.home'),
    link: { hash: '#home' },
    active: true,
  },
  {
    key: ENavigationVisibleItems.projects,
    name: t('navigation.projects'),
    link: { hash: '#projects' },
    active: false,
    disabled: true,
  },
  {
    key: ENavigationVisibleItems.me,
    name: t('navigation.aboutMe'),
    link: { hash: '#me' },
    active: false,
  },
  {
    key: ENavigationVisibleItems.contact,
    name: t('navigation.contact'),
    link: { hash: '#contact' },
    active: false,
  },
])

const changeActiveLink = (activeLink: TNavigationVisibleItemsCondition) => {
  const currentActiveLinkList = linksList
    .value
    .find(link => link.active)

  if (currentActiveLinkList) {
    currentActiveLinkList.active = false
  }

  const providedActiveLink = linksList
    .value
    .find(link => link.key === activeLink)

  if (providedActiveLink) {
    providedActiveLink.active = true
  }
}

const scrollToBlock = (key: string) => {
  const block = document.querySelector(`[data-menu="${key}"]`)
  if (key === 'contact') {
    window.scrollBy({
      top: block.getBoundingClientRect()?.y + block.clientHeight - 160,
    })
    return
  }
  if (block) {
    window.scrollBy({
      top: block.getBoundingClientRect()?.y - 160,
    })
  }
}

onMounted(() => {
  $bus.on('navigation:item:visible', changeActiveLink)
})

onUnmounted(() => {
  $bus.off('navigation:item:visible', changeActiveLink)
})
</script>

<style lang="scss">
.app-navigation {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 22rem;

  &__item {
    display: flex;

    &-link {
      color: map-get($theme-palette, 'primary');
      text-decoration: unset;
    }

    &-active {
      height: 10rem;
      width: 2rem;
      background: map-get($theme-palette, 'primary');
      align-self: end;
    }
  }

  @media #{map-get($display-rules, 'md')} {
    display: flex;

    &__item {
      font-size: 14rem;

      &-link {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
      }
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    &__item {
      &-link {
        font-size: 18rem;
      }
    }
  }
}
</style>
