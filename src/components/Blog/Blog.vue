<template src="./Blog.html"></template>
<style lang="scss" scoped src="./Blog.scss"></style>
<script>
export default {
  name: "Blog",
  data() {
    return {
      sections: [
        {
          title: "Rutinas",
          description: "Mira el detalle de nuestros programas",
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
        },
        {
          title: "Gratis",
          description: "Mira el detalle de nuestros programas",
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
            }
          ]
        }
      ]
    };
  }
};
</script>

