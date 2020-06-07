<template src="./Profile.html"></template>
<style lang="scss" scoped src="./Profile.scss"></style>
<script>
import UserNav from "~/components/UserNav/UserNav";

export default {
  name: "Profile",
  metaInfo: {
    title: "Pefil",
    meta: [
      {
        name: "description",
        content: "Mi pefil"
      },
      {
        name: "keywords",
        content: "Pefil, Training, TRX Trainer"
      }
    ]
  },
  components: {
    UserNav
  }
};
</script>