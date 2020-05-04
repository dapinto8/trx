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
        infinite: true,
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
      },
      videos: [
        {
          image: require('@/assets/images/youtube_1@2x.jpg'),
          title: 'Haz este Ejercicio por solo 7 Minutos en casa'
        },
        {
          image: require('@/assets/images/youtube_2@2x.jpg'),
          title: 'Rutina de ESPALDA con TRX'
        },
        {
          image: require('@/assets/images/youtube_3@2x.jpg'),
          title: 'Rutina de PIERNAS con bandas'
        },
        {
          image: require('@/assets/images/youtube_1@2x.jpg'),
          title: 'Haz este Ejercicio por solo 7 Minutos en casa'
        },
        {
          image: require('@/assets/images/youtube_2@2x.jpg'),
          title: 'Rutina de ESPALDA con TRX'
        }
      ]
    };
  }
};
</script>