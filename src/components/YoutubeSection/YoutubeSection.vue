<template src="./YoutubeSection.html"></template>
<style lang="scss" scoped src="./YoutubeSection.scss"></style>
<static-query>
  query {
    videos: allStrapiYoutube {
      edges {
        node {
          id
          title
          url
          cover {
            id
            name
            alternativeText
            ext
            url(quality: 100)
          }
        }
      }
    }
  }
</static-query>
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
      }
    };
  }
};
</script>