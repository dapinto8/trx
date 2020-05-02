<template src="./Home.html"></template>
<style lang="scss" scoped src="./Home.scss"></style>
<script>
import ProgramsSection from "~/components/ProgramsSection/ProgramsSection";
import PlanList from "~/components/PlanList/PlanList";
import TestimonialsSection from "~/components/TestimonialsSection/TestimonialsSection";
import InstructorSection from "~/components/InstructorSection/InstructorSection";

export default {
  name: "Home",
  components: {
    ProgramsSection,
    PlanList,
    TestimonialsSection,
    InstructorSection
  }
};
</script>