<template>
  <OHomeHero>
    <template #title>Welcome to <span class="text-secondary-600">RecipeCart.</span></template>

    <template #subtitle>
      Your all-in-one solution for cataloging recipes creating dynamic shopping lists, and more.
    </template>

    <template #actions>
      <AButton
        size="x-large"
        variant="primary"
        :outline="3"
        @click.prevent="() => console.log('🥗')"
      >
        <span class="lg:mx-4">My Recipes</span>
      </AButton>

      <AButton
        size="x-large"
        variant="secondary"
        :outline="4"
        @click.prevent="() => console.log('🛒')"
      >
        <span class="italic lg:mx-2">Go Shopping!</span>
      </AButton>
    </template>
  </OHomeHero>
</template>

<script setup lang="ts">
// import heroImage from '/img/knife.png';

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Metadata ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */
useHead({
  title: 'Recipe Cart - Your Personal Recipe Manager',
});
</script>
