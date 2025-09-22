<!-- organisms/NavBar.vue -->
<template>
  <nav class="m-2 rounded-lg bg-white">
    <UContainer>
      <!-- Desktop Layout -->
      <div class="hidden items-center justify-between py-2 lg:flex">
        <!-- <BrandLogo /> -->
        <div class="flex space-x-6">
          <ULink v-for="item in navItems" :key="item.to" :to="item.to" active-class="font-bold">
            {{ item.label }}
          </ULink>
        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="lg:hidden">
        <div class="flex items-center justify-between pb-2">
          <BrandLogo />
          <UButton size="xl" variant="ghost" icon="i-heroicons-bars-3" @click="toggleMobileMenu" />
        </div>

        <!-- Mobile Menu (slide-in/dropdown) -->
        <div v-if="isMobileMenuOpen" class="border-t border-gray-200">
          <div class="space-y-2 py-4">
            <ULink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="block px-4 py-2 hover:bg-gray-50"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </ULink>
          </div>
        </div>
      </div>
    </UContainer>
  </nav>
</template>

<script setup>
const navItems = [
  { label: 'My Recipes', to: '/recipes' },
  { label: 'Cook Books', to: '/cook-books' },
  { label: 'Shopping Lists', to: '/shopping-lists' },
];

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => (isMobileMenuOpen.value = !isMobileMenuOpen.value);
const closeMobileMenu = () => (isMobileMenuOpen.value = false);
</script>
