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
  mounted() {
    if (this.$cookies.isKey('session')) {
      this.name = this.$cookies.get('session').user.name;
    }
  }
};
</script>