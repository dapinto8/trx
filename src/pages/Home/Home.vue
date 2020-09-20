<template src="./Home.html"></template>
<style lang="scss" scoped src="./Home.scss"></style>
<script>
import ProgramsSection from "~/components/ProgramsSection/ProgramsSection";
import PlanList from "~/components/PlanList/PlanList";
import TestimonialsSection from "~/components/TestimonialsSection/TestimonialsSection";
import InstructorSection from "~/components/InstructorSection/InstructorSection";
import VueSlickCarousel from "vue-slick-carousel";

import Plans from "~/data/plans.json";

export default {
  name: "Home",
  metaInfo: {
    meta: [
      {
        name: "description",
        content: `Jesús Lezama, entrenador certificado en el IFBB (International Federationof Bodybuilding and Fitness) con 24 años de experiencia en el rubro. Capacitado en TRX Suspension Training, PilatesSuspension Method en Chile y Nueva York (USA).`,
      },
      {
        name: "keywords",
        content: "Jesús Lezama, TRX Trainer, Ejercicio, Rutinas, Entranamiento",
      },
    ],
  },
  components: {
    ProgramsSection,
    PlanList,
    TestimonialsSection,
    InstructorSection,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      },
      sliders: [
        {
          title: 'Zoom training',
          description: 'Un entrenamiento dirigido con capacidad limitada por sesión y con horarios flexibles'
        },
        {
          title: 'Rutinas Online',
          description: 'Entrena a tu ritmo y con las mejores rutinas preparadas por nosotros'
        },
        {
          title: 'Personal Training',
          description: 'Entrenamiento personalizado adecuado a tus necesidades, en el momento que más te acomode'
        },
        {
          title: 'Gimnasio + Rutinas online',
          description: 'Entrena con nosotros en el gimnasio y obtén un acceso a nuestra plataforma online'
        }
      ],
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
    }
  },
  computed: {
    plans: () => {
      if (Plans.length < 6) {
        for (let i = 0; i <= 6 - Plans.length; i++) {
          Plans.push({});
        }
      }
      return Plans;
    }
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