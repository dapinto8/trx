<template>
  <section class="plans-list background">
    <div class="container">
      <h2 class="title-section">Membresía</h2>
      <h3 class="subtitle-section white">
        Obtén el plan
        <br />que más te conviene
      </h3>
      <div class="plans-list-items">
        <PlansListItem
          v-for="plan in getPlans"
          :key="plan.id"
          :name="plan.name"
          :description="plan.description"
          :price="plan.price"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PlansListItem from "./PlansListItem";
import Plans from "~/data/plans.json";

export default {
  components: {
    PlansListItem
  },
  data() {
    return {
      Plans
    }
  },
  computed: {
    getPlans: function () {
      if (Plans.length < 4) {
        for (let i = 0; i <= (4 - Plans.length); i++ ) {
          Plans.push({})
        }
      }
      return Plans
    }
  }
};
</script>

<style lang="scss" scoped>
.plans-list {
  background-image: url("~@/assets/images/membership.jpg");

  .plans-list-items {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    padding-bottom: 25px;
    overflow-x: auto;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>