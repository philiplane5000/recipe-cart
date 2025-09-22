<template>
  <UApp>
    <ONavBar />
    <main class="main-content">
      <NuxtPage />
    </main>
  </UApp>
</template>
<style lang="css">
@reference "~/assets/css/main.css";
.main-content {
  @apply bg-white;
}
</style>
