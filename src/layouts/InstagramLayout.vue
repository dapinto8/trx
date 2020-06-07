<template>
  <main-layout>
    <slot />
    <TheInstagramSection />
  </main-layout>
</template>

<script>
import TheInstagramSection from "~/components/TheInstagramSection/TheInstagramSection";

export default {
  name: 'InstagramLayout',
  components: {
    TheInstagramSection
  }
};
</script>
