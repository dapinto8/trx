<template src="./Courses.html"></template>
<style lang="scss" scoped src="./Courses.scss"></style>
<script>
import UserNav from '~/components/UserNav/UserNav';
import Blog from '~/components/Blog/Blog';

export default {
  name: 'Courses',
  metaInfo: {
    title: 'Mis cursos',
    meta: [
      {
        name: 'description',
        content: 'Mis cursos'
      },
      {
        name: 'keywords',
        content: 'Cursos, Training, TRX Trainer'
      }
    ]
  },
  components: {
    UserNav,
    Blog
  },
  data() {
    return {
      courses: [
        {
          title: 'Rutinas',
          subtitle: 'Encuentra la motivación y entrena ahora',
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
            },
            {
              image: require('@/assets/images/post-cooking.jpg'),
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
    }
  }
};
</script>