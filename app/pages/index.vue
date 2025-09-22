<template>
  <UContainer>
    <OHomeHero>
      <h1 class="text-black">Welcome to Recipe Cart!</h1>
      <template #actions>
        <UButton
          color="secondary"
          size="lg"
          class="cursor-pointer uppercase"
          label="My Recipes"
          variant="solid"
          to="recipes"
        />
        <UButton
          color="primary"
          size="lg"
          class="cursor-pointer uppercase"
          label="New Recipe"
          variant="solid"
        />
      </template>
    </OHomeHero>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing',
});

useHead({
  title: 'Recipe Cart',
});
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
