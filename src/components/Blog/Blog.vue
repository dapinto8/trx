<template src="./Blog.html"></template>
<style lang="scss" scoped src="./Blog.scss"></style>
<script>
export default {
  name: 'Blog',
  props: {
    sections: {
      type: Array,
      default() {
        return [
          {
            title: 'Rutinas Online',
            subtitle: 'Encuentra la motivación y entrena ahora',
            description: `
              Entrena con las mejores rutinas especializadas 
              en cada área del cuerpo y rutinas completas. 
              Accede a la plataforma en el horario que tengas 
              y desde donde te encuentres. 
            `,
            posts: [
              {
                image: require('@/assets/images/post-foods.jpg'),
                category: 'Food and life',
                title: 'Succed in hotel business',
                description:
                  'Fresh food directly from our restaurant ready coocked for you and you familly'
              },
              {
                image: require('@/assets/images/post-cooking.jpg'),
                category: 'Cooking',
                title: 'Cooking delicious food',
                description:
                  'Fresh food directly from our restaurant ready coocked for you and you familly'
              },
              {
                image: require('@/assets/images/post-fruits.jpg'),
                category: 'Fruits',
                title: 'Getting fresh fruits',
                description:
                  'Fresh food directly from our restaurant ready coocked for you and you familly'
              },
              {
                image: require('@/assets/images/post-fruits.jpg'),
                category: 'Fruits',
                title: 'Getting fresh fruits',
                description:
                  'Fresh food directly from our restaurant ready coocked for you and you familly'
              },
              {
                image: require('@/assets/images/post-cooking.jpg'),
                category: 'Cooking',
                title: 'Cooking delicious food',
                description:
                  'Fresh food directly from our restaurant ready coocked for you and you familly'
              },
              {
                image: require('@/assets/images/post-foods.jpg'),
                category: 'Food and life',
                title: 'Succed in hotel business',
                description:
                  'Fresh food directly from our restaurant ready coocked for you and you familly'
              }
            ]
          }
        ];
      }
    }
  }
};
</script>

