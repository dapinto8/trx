<template src="./Blog.html"></template>
<style lang="scss" scoped src="./Blog.scss"></style>
<script>
export default {
  name: "Blog",
  props: {
    sections: {
      type: Array,
      required: true,
      default: [
        {
          title: "Rutinas",
          subtitle: "Encuentra la motivación y entrena ahora",
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
          `,
          posts: [
            {
              image: require("@/assets/images/post-foods.jpg"),
              category: "Food and life",
              title: "Succed in hotel business",
              description:
                "Fresh food directly from our restaurant ready coocked for you and you familly"
            },
            {
              image: require("@/assets/images/post-cooking.jpg"),
              category: "Cooking",
              title: "Cooking delicious food",
              description:
                "Fresh food directly from our restaurant ready coocked for you and you familly"
            },
            {
              image: require("@/assets/images/post-fruits.jpg"),
              category: "Fruits",
              title: "Getting fresh fruits",
              description:
                "Fresh food directly from our restaurant ready coocked for you and you familly"
            },
            {
              image: require("@/assets/images/post-fruits.jpg"),
              category: "Fruits",
              title: "Getting fresh fruits",
              description:
                "Fresh food directly from our restaurant ready coocked for you and you familly"
            },
            {
              image: require("@/assets/images/post-cooking.jpg"),
              category: "Cooking",
              title: "Cooking delicious food",
              description:
                "Fresh food directly from our restaurant ready coocked for you and you familly"
            },
            {
              image: require("@/assets/images/post-foods.jpg"),
              category: "Food and life",
              title: "Succed in hotel business",
              description:
                "Fresh food directly from our restaurant ready coocked for you and you familly"
            }
          ]
        }
      ]
    }
  }
};
</script>

