<template src="./UserHome.html"></template>
<style lang="scss" scoped src="./UserHome.scss"></style>
<script>
import UserNav from '~/components/UserNav/UserNav';
import Blog from '~/components/Blog/Blog';

export default {
  name: 'UserHome',
  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'Home'
      },
      {
        name: 'keywords',
        content: 'Home, Training, TRX Trainer'
      }
    ]
  },
  components: {
    Blog,
    UserNav
  },
  data() {
    return {
      name: '',
      routines: [
        {
          title: 'Rutinas Online',
          subtitle: 'Continua tu entrenamiento',
          description: '',
          type: 'one',
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
            }
          ]
        },
        {
          title: 'Más Rutinas Online',
          subtitle: 'Entrena las nuevas rutinas que tenemos para ti',
          description: '',
          type: 'two',
          posts: [
            {
              image: require('@/assets/images/post-foods.jpg'),
              category: 'Big',
              title: 'Spacious Room',
              description:
                'The most spacious room you will ever see inwith span and warm beds'
            },
            {
              image: require('@/assets/images/post-cooking.jpg'),
              category: 'Big',
              title: 'Spacious Room',
              description:
                'The most spacious room you will ever see inwith span and warm beds'
            }
          ]
        }
      ]
    };
  },
  mounted() {
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/');
    } else {
      this.name = this.$cookies.get('session').user.name;
    }
  }
};
</script>