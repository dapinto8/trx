<template src="./Home.html"></template>
<style lang="scss" scoped src="./Home.scss"></style>
<script>
import ProgramsSection from "~/components/ProgramsSection/ProgramsSection";
import PlanList from "~/components/PlanList/PlanList";
import TestimonialsSection from "~/components/TestimonialsSection/TestimonialsSection";
import InstructorSection from "~/components/InstructorSection/InstructorSection";

export default {
  name: "Home",
  metaInfo: {
    meta: [
      {
        name: "description",
        content: `Jesús Lezama, entrenador certificado en el IFBB (International Federationof Bodybuilding and Fitness) con 24 años de experiencia en el rubro. Capacitado en TRX Suspension Training, PilatesSuspension Method en Chile y Nueva York (USA).`
      },
      {
        name: "keywords",
        content: "Jesús Lezama, TRX Trainer, Ejercicio, Rutinas, Entranamiento"
      }
    ]
  },
  components: {
    ProgramsSection,
    PlanList,
    TestimonialsSection,
    InstructorSection
  }
};
</script>