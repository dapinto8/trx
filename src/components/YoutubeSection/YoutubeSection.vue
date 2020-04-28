<template src="./YoutubeSection.html"></template>
<style lang="scss" scoped src="./YoutubeSection.scss"></style>
<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "YoutubeSection",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    };
  }
};
</script>