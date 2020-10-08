<template>
  <main-layout>
    <slot />
    <PhotosSection />
  </main-layout>
</template>

<script>
import PhotosSection from '~/components/PhotosSection/PhotosSection';

export default {
  name: 'PhotosLayout',
  components: {
    PhotosSection
  }
};
</script>
