<template src="./Programs.html"></template>
<style lang="scss" scoped src="./Programs.scss"></style>
<static-query>
  query {
    plans: allStrapiPlans {
      edges {
        node {
          id
          name
          condition
          features
        }
      }
    }
  }
</static-query>
<script>
import ProgramsSection from '~/components/ProgramsSection/ProgramsSection';
import PlanList from '~/components/PlanList/PlanList';
import Blog from '~/components/Blog/Blog';
import TestimonialsSection from '~/components/TestimonialsSection/TestimonialsSection';
import YoutubeSection from '~/components/YoutubeSection/YoutubeSection';

import Plans from '~/data/plans.json';

export default {
  name: 'Programs',
  metaInfo: {
    title: 'Programas',
    meta: [
      {
        name: 'description',
        content:
          'Descubre nuestros programas online para llegar a la mejor versión de tu cuerpo'
      },
      {
        name: 'keywords',
        content: 'Programas, Membresías, Rutinas, Ejercicio, Entranamiento'
      }
    ]
  },
  components: {
    ProgramsSection,
    PlanList,
    Blog,
    TestimonialsSection,
    YoutubeSection
  },
  data() {
    return {
      tab: 0
    };
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
  }
};
</script>