<template src="./Home.html"></template>
<style lang="scss" scoped src="./Home.scss"></style>
<script>
import ProgramsSection from "~/components/ProgramsSection/ProgramsSection";
import PlansList from "~/components/PlanList/PlanList";
import TestimonialsSection from "~/components/TestimonialsSection/TestimonialsSection";
import InstructorSection from "~/components/InstructorSection/InstructorSection";
import YoutubeSection from "~/components/YoutubeSection/YoutubeSection";

export default {
  name: "Home",
  components: {
    ProgramsSection,
    PlansList,
    TestimonialsSection,
    InstructorSection,
    YoutubeSection
  }
};
</script>