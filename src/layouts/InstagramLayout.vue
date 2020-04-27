<template>
  <main-layout>
    <slot />
    <Instagram />
  </main-layout>
</template>

<script>
import Instagram from "~/components/Instagram/Instagram";

export default {
  components: {
    Instagram
  }
};
</script>
