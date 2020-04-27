<template src="./Home.html"></template>
<style lang="scss" scoped src="./Home.scss"></style>
<script>
import ProgramsContent from "~/components/ProgramsContent/ProgramsContent";
import PlansList from "~/components/PlanList/PlanList";
import InstructorContent from "~/components/InstructorContent/InstructorContent";
import Youtube from "~/components/Youtube/Youtube";

export default {
  name: "Home",
  components: {
    ProgramsContent,
    PlansList,
    InstructorContent,
    Youtube
  }
};
</script>