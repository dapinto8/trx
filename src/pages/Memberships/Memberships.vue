<template src="./Memberships.html"></template>
<style lang="scss" scoped src="./Memberships.scss"></style>
<style lang="scss">
.Memberships {
  .PlanList .plans-list-items {
    margin-top: 0;

    .PlanListItem {
      border: 3px solid $grey2;
      background-color: $background-light;
    }
  }
}
</style>
<script>
import UserNav from "~/components/UserNav/UserNav";
import PlanList from "~/components/PlanList/PlanList";

import Plans from "~/data/plans-memberships.json";

export default {
  name: "Payment",
  metaInfo: {
    title: "Pago",
    meta: [
      {
        name: "description",
        content: "Pago",
      },
      {
        name: "keywords",
        content: "Pago, Training, TRX Trainer",
      },
    ],
  },
  components: {
    UserNav,
    PlanList,
  },
  data() {
    return {
      plans: Plans,
    };
  },
};
</script>