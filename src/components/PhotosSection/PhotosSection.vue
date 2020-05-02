<template src="./PhotosSection.html"></template>
<style lang="scss" scoped src="./PhotosSection.scss"></style>
<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "PhotosSection",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      images: [
        require("@/assets/images/photo-1.jpg"),
        require("@/assets/images/photo-2.jpg"),
        require("@/assets/images/photo-3.jpg"),
        require("@/assets/images/photo-4.jpg"),
        require("@/assets/images/photo-1.jpg"),
        require("@/assets/images/photo-2.jpg")
      ]
    };
  }
};
</script>