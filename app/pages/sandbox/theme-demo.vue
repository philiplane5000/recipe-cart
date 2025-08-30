<template>
  <v-sheet class="elevation-2 !rounded-xl px-4 py-2">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <!-- Examples using built-in Vuetify color variations -->

          <h1 class="my-4 text-3xl 2xl:text-5xl">Color Palette</h1>

          <!-- Primary Color Variations -->
          <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10">
            <div
              v-for="(hex, shade) in colorTokens.primary"
              :key="`primary-${shade}`"
              :style="{ backgroundColor: hex }"
              class="flex min-h-20 items-center justify-center rounded-lg font-medium text-white shadow-md"
            />
          </div>

          <!-- Secondary Color Variations -->
          <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10">
            <div
              v-for="(hex, shade) in colorTokens.secondary"
              :key="`secondary-${shade}`"
              :style="{ backgroundColor: hex }"
              class="flex min-h-20 items-center justify-center rounded-lg font-medium text-white shadow-md"
            />
          </div>

          <!-- Accent Color Variations -->
          <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10">
            <div
              v-for="(hex, shade) in colorTokens.accent"
              :key="`accent-${shade}`"
              :style="{ backgroundColor: hex }"
              class="flex min-h-20 items-center justify-center rounded-lg font-medium text-white shadow-md"
            />
          </div>

          <!-- Success Color Variations -->
          <!-- <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10">
            <div
              v-for="(hex, shade) in colorTokens.success"
              :key="`accent-${shade}`"
              :style="{ backgroundColor: hex }"
              class="flex min-h-20 items-center justify-center rounded-lg font-medium text-white shadow-md"
            />
          </div> -->

          <!-- Warning Color Variations -->
          <!-- <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10">
            <div
              v-for="(hex, shade) in colorTokens.warning"
              :key="`accent-${shade}`"
              :style="{ backgroundColor: hex }"
              class="flex min-h-20 items-center justify-center rounded-lg font-medium text-white shadow-md"
            />
          </div> -->

          <!-- Info Color Variations -->
          <!-- <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10">
            <div
              v-for="(hex, shade) in colorTokens.info"
              :key="`accent-${shade}`"
              :style="{ backgroundColor: hex }"
              class="flex min-h-20 items-center justify-center rounded-lg font-medium text-white shadow-md"
            />
          </div> -->

          <!-- Neutral Color Variations -->
          <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10">
            <div
              v-for="(hex, shade) in colorTokens.neutral"
              :key="`accent-${shade}`"
              :style="{ backgroundColor: hex }"
              class="flex min-h-20 items-center justify-center rounded-lg font-medium text-white shadow-md"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="9">
          <!-- Custom CSS using theme colors -->
          <div class="theme-showcase rounded-md border-2 p-4 transition-all">
            <h3 class="text-gold font-bold">Current theme: {{ name }}</h3>
            <p>This text adapts to the current theme automatically</p>
          </div>
        </v-col>
        <v-col sm="12" md="3" class="flex flex-col items-center justify-center gap-2">
          <AButton size="x-large" :outline="2" @click="toggleTheme">
            <span class="text-uppercase mx-3">{{
              name === 'light' ? 'Light Mode' : 'Dark Mode'
            }}</span>
          </AButton>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { colorTokens } from '@@/config/colors/tokens';

const { toggle, name } = useTheme();

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Metadata ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */
useHead({
  title: 'Recipe Cart- Theme',
});

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Methods ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */
/**
 * Method for toggling the theme
 */
function toggleTheme() {
  toggle();
}
</script>

<style scoped>
.theme-showcase {
  background-color: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  border-color: rgb(var(--v-theme-secondary-darken-4));
}
</style>
