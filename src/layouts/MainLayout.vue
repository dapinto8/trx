<template>
  <main class="MainLayout">
    <Header />
    <slot />
    <Footer />
  </main>
</template>

<script>
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
