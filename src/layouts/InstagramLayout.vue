<template>
  <main-layout>
    <slot />
    <InstagramSection />
  </main-layout>
</template>

<script>
import InstagramSection from "~/components/InstagramSection/InstagramSection";

export default {
  components: {
    InstagramSection
  }
};
</script>
