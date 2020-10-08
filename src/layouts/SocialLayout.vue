<template>
  <main-layout>
    <slot />
    <YoutubeSection />
    <TheInstagramSection />
  </main-layout>
</template>

<script>
import YoutubeSection from '~/components/YoutubeSection/YoutubeSection';
import TheInstagramSection from '~/components/TheInstagramSection/TheInstagramSection';

export default {
  name: 'SocialLayout',
  components: {
    YoutubeSection,
    TheInstagramSection
  }
};
</script>
