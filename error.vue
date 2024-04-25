<template>
  <div class="app-root app-root--error">

    <NuxtLayout name="default">
      <pre>
        {{ error.message }}
      </pre>
    </NuxtLayout>

    <CommonScope />
  </div>
</template>

<script lang="ts" setup>
const error = useError()
</script>
