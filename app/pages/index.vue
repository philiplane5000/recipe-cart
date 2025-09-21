<template>
  <UContainer>
    <h1 class="text-primary-700 my-8 font-sans font-bold">Welcome to Recipe Cart</h1>

    <UCard variant="solid">
      <template #header>
        <h2 class="text-secondary-500 font-semibold uppercase">Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet nibh a placerat
          tempus. Integer sollicitudin urna a sem semper volutpat. Donec sem erat, convallis ut
          lacus sed, ultrices bibendum diam. Integer vitae mattis magna. Ut aliquam odio a tempor
          tempor. Fusce rhoncus augue eu varius cursus. Fusce id metus eu libero pretium blandit at
          sodales velit. Donec eu facilisis mi. Nullam luctus, elit quis ultrices ullamcorper, felis
          urna porta lacus, eu tincidunt dui mauris sed velit. Morbi scelerisque enim at ligula
          posuere commodo molestie cursus massa. Praesent egestas convallis massa at pellentesque.
          Vivamus tincidunt purus tellus.
        </p>
      </template>
      <UAccordion :items="items" />

      <template #footer>
        <!-- TODO: Alignment of the Nuxt UI Theme -->
        <UButton color="primary" class="cursor-pointer" label="My Recipes" variant="subtle" />
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui';

const items = ref<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content:
      'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
  },
]);
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
