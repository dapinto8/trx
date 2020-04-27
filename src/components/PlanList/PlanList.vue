<template src="./PlanList.html"></template>
<style lang="scss" scoped src="./PlanList.scss"></style>

<script>
import PlansListItem from "~/components/PlanListItem/PlanListItem";
import Plans from "~/data/plans.json";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "PlanList",
  components: {
    PlansListItem,
    VueSlickCarousel
  },
  data() {
    return {
      Plans,
      settings: {
        arrows: true,
        infinite: false,
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
  },
  computed: {
    getPlans: function() {
      if (Plans.length < 6) {
        for (let i = 0; i <= 6 - Plans.length; i++) {
          Plans.push({});
        }
      }
      return Plans;
    }
  }
};
</script>
