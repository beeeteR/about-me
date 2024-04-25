<template>
  <div class="app-page-home">
    <layout-navigation class="app-page-home__navigation-menu" />

    <app-banners-main
      ref="homeElement"
      :id="ENavigationVisibleItems.home"
      :data-menu="ENavigationVisibleItems.home"
      class="app-block app-page-home__main-block"
    />
    <app-main-projects
      v-if="false"
      ref="projectsElement"
      :id="ENavigationVisibleItems.projects"
      :data-menu="ENavigationVisibleItems.projects"
      class="app-block app-page-home__projects-list"
    />
    <app-main-information
      ref="meElement"
      :id="ENavigationVisibleItems.me"
      :data-menu="ENavigationVisibleItems.me"
      class="app-block app-page-home__about-me"
    />
    <app-main-contact
      ref="contactElement"
      :id="ENavigationVisibleItems.contact"
      :data-menu="ENavigationVisibleItems.contact"
      class="app-block app-page-home__contact"
    />
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'
import { ENavigationVisibleItems, type TNavigationVisibleItemsCondition} from '~/shared/constants/navigation'

const homeElement = ref<HTMLElement>()
const projectsElement = ref<HTMLElement>()
const meElement = ref<HTMLElement>()
const contactElement = ref<HTMLElement>()

definePageMeta({
  layout: 'default',
})

const { $bus } = useNuxtApp()

const menu = [
  homeElement,
  projectsElement,
  meElement,
  contactElement,
]

const intersections: ReturnType<typeof useIntersectionObserver>['stop'][] = []

onMounted(() => {
  menu.map((item) => {
    const intersection = useIntersectionObserver(item, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        $bus.emit('navigation:item:visible', item.value?.$el.dataset.menu as TNavigationVisibleItemsCondition)
      }
    })

    intersections.push(intersection.stop)
  }, { threshold: 0.25 })
})

onUnmounted(() => {
  intersections.forEach((fn) => {
    fn()
  })
})
</script>

<style lang="scss">
.app-page-home {

  .app-block {
    min-height: 100vh;
  }

  @media #{map-get($display-rules, 'md')} {
    &__navigation-menu {
      margin: max(calc(50vh - 300rem), 180rem) -48rem;
      width: fit-content;
      position: fixed;
    }
  }
}
</style>
