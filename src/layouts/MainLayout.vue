<template>
  <section class="main-layout">
    <Header />
    <slot />
    <Footer />
  </section>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.main-layout {
  
}
</style>
