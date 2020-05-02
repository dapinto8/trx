<template src="./TestimonialsSection.html"></template>
<style lang="scss" scoped src="./TestimonialsSection.scss"></style>
<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "TestimonialsSection",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1
      },
      testimonials: [
        {
          image: require('@/assets/images/people.jpg'),
          name: 'John Doe',
          position: 'IT Engineer',
          comment: `
            I'm very glad I had the opportunity to visit this hotel.
            The stuff is very friendly and I will definetly
            visit the hotel again next year.
          `
        },
        {
          image: require('@/assets/images/people.jpg'),
          name: 'John Doe',
          position: 'IT Engineer',
          comment: `
            I'm very glad I had the opportunity to visit this hotel.
            The stuff is very friendly and I will definetly
            visit the hotel again next year.
          `
        },
        {
          image: require('@/assets/images/people.jpg'),
          name: 'John Doe',
          position: 'IT Engineer',
          comment: `
            I'm very glad I had the opportunity to visit this hotel.
            The stuff is very friendly and I will definetly
            visit the hotel again next year.
          `
        },
        {
          image: require('@/assets/images/people.jpg'),
          name: 'John Doe',
          position: 'IT Engineer',
          comment: `
            I'm very glad I had the opportunity to visit this hotel.
            The stuff is very friendly and I will definetly
            visit the hotel again next year.
          `
        }
      ]
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