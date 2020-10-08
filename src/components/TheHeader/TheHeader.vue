<template src="./TheHeader.html"></template>
<style lang="scss" scoped src="./TheHeader.scss"></style>
<script>
import UserNav from "~/components/UserNav/UserNav";

export default {
  name: 'TheHeader',
  components: {
    UserNav
  },
  data() {
    return {
      name: null,
      showUserMenu: false, 
      isShowing: false
    };
  },
  methods: {
    checkViewSize() {
      if (window.innerWidth >= 1024) {
        this.isShowing = true;
      } else {
        this.isShowing = false;
      }
    }
  },
  mounted() {
    this.checkViewSize();
    window.addEventListener('resize', this.checkViewSize);
  },
  created() {
    if (this.$cookies.isKey('session')) {
      this.name = this.$cookies.get('session').user.name;
    }
  }
};
</script>