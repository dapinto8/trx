<template src="./TheHeader.html"></template>
<style lang="scss" scoped src="./TheHeader.scss"></style>
<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isShowing: true
    };
  },
  methods: {
    checkViewSize() {
      if (window.innerWidth >= 1024) {
        this.isShowing = true;
      }
    }
  },
  mounted() {
    this.checkViewSize();
    window.addEventListener("resize", this.checkViewSize);
  }
};
</script>