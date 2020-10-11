<template src="./TestimonialsSection.html"></template>
<style lang="scss" scoped src="./TestimonialsSection.scss"></style>
<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  name: 'TestimonialsSection',
  components: {
    VueSlickCarousel
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    features: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      apiUrl: process.env.GRIDSOME_API_URL,
      settings: {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      }
    };
  },
  methods: {
    showNext() {
      this.$refs.slider.next();
    },
    showPrev() {
      this.$refs.slider.prev();
    }
  }
};
</script>