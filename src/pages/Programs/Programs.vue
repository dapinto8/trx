<template src="./Programs.html"></template>
<style lang="scss" scoped src="./Programs.scss"></style>
<script>
import ProgramsSection from "~/components/ProgramsSection/ProgramsSection";
import PlanList from "~/components/PlanList/PlanList";
import Blog from "~/components/Blog/Blog";

export default {
  name: "Programs",
  metaInfo: {
    title: "Programas",
    meta: [
      {
        name: "description",
        content:
          "Descubre nuestros programas online para llegar a la mejor versión de tu cuerpo"
      },
      {
        name: "keywords",
        content: "Programas, Membresías, Rutinas, Ejercicio, Entranamiento"
      }
    ]
  },
  components: {
    ProgramsSection,
    PlanList,
    Blog
  }
};
</script>