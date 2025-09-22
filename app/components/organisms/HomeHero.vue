<template>
  <div
    class="home-hero elevation-2 mb-4 flex min-h-96 w-full flex-col items-baseline justify-center rounded-lg bg-white p-8"
  >
    <div class="content">
      <slot name="default" />
    </div>
    <div class="actions flex gap-4">
      <slot name="actions" />
    </div>
  </div>
</template>
<script lang="ts" setup>
onMounted(() => {
  console.log('HomeHero.vue ✅');
});
</script>
<style scoped>
@reference "~/assets/css/main.css";

.home-hero {
  height: max(calc(var(--spacing) * 96), calc(100vh - 2rem));

  .content,
  .actions {
    @apply md:w-1/2;
  }
}
</style>
