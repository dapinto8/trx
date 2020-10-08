<template src="./UserNav.html"></template>
<style lang="scss" scoped src="./UserNav.scss"></style>
<script>
export default {
  name: 'UserNav',
  data() {
    return {
      name: ''
    }
  },
  created() {
    this.name = this.$cookies.get('session').user.name;
  }
};
</script>