<template>
  <div
    class="home-hero"
    :style="{ '--bg-image': props.backgroundImage ? `url('${props.backgroundImage}')` : 'none' }"
  >
    <div class="z-10 w-full lg:w-1/2">
      <div class="mb-8">
        <span class="title">
          <slot name="title" />
        </span>
      </div>
      <p class="subtitle">
        <slot name="subtitle" />
      </p>
      <div class="actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Types ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */

interface IHomeHeroProps {
  backgroundImage?: string;
}

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Props ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */

const props = withDefaults(defineProps<IHomeHeroProps>(), {
  backgroundImage: '',
});
</script>

<style lang="scss" scoped>
.home-hero {
  @apply relative mb-5 flex w-full flex-col justify-start rounded-xl p-8 shadow-md lg:justify-center;
  @apply bg-white bg-contain bg-right bg-no-repeat;

  /* Image set via props fallback to none */
  background-image: var(--bg-image, none);

  @media all and (min-width: 768px) {
    height: min(46rem, calc(100vh - 2rem));
  }

  .title {
    @apply my-6 text-balance text-3xl font-extrabold md:text-5xl/[1.34];
  }
  .subtitle {
    @apply my-6 text-pretty font-light leading-8 text-black;
  }
  .actions {
    @apply flex flex-row gap-2 md:gap-4;
  }
}
</style>
