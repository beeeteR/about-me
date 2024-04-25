<template>
  <div class="app-layout app-layout--default">
    <layout-header />

    <main class="app-layout__content">
      <slot />
    </main>

    <layout-footer />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.app-layout--default {
  .app-layout__content {
    padding: 0 18rem 16rem;
  }

  @media #{map-get($display-rules, 'md')} {
    padding: 0 40rem 16rem;
  }

  @media #{map-get($display-rules, 'xl')} {
    padding: 0 65rem 24rem;
  }
}
</style>
