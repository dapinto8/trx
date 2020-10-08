<template src="./PlanList.html"></template>
<style lang="scss" scoped src="./PlanList.scss"></style>

<script>
// import PlansListItem from "~/components/PlanListItem/PlanListItem";
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  name: 'PlanList',
  components: {
    // PlansListItem,
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
    background: {
      type: Boolean,
      default: true
    },
    plans: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      settings: {
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      }
    };
  }
};
</script>
