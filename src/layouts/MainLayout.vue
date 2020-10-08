<template>
  <main class="MainLayout">
    <TheHeader />
    <slot />
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader';
import TheFooter from '~/components/TheFooter/TheFooter';

export default {
  name: 'MainLayout',
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
