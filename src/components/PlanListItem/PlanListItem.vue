<template src="./PlanListItem.html"></template>
<style lang="scss" scoped src="./PlanListItem.scss"></style>

<script>
export default {
  name: 'PlansListItem',
  props: {
    name: {
      type: String
    },
    features: {
      type: Array
    },
    condition: {
      type: String
    }
  }
};
</script>

