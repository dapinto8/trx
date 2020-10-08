<template src="./Profile.html"></template>
<style lang="scss" scoped src="./Profile.scss"></style>
<script>
import UserNav from '~/components/UserNav/UserNav';
import { getUser, updateUser } from '~/services/userService';

export default {
  name: 'Profile',
  metaInfo: {
    title: 'Pefil',
    meta: [
      {
        name: 'description',
        content: 'Mi pefil'
      },
      {
        name: 'keywords',
        content: 'Pefil, Training, TRX Trainer'
      }
    ]
  },
  components: {
    UserNav
  },
  data() {
    return {
      user: {
        name: '',
        last_name: '',
        birthdate: '',
        phone: '',
        email: '',
        instragram: '',
        direction: '',
        objetive: '',
        weight: '',
        job: '',
        activity_level: '',
        height: ''
      }
    }
  },
  methods: {
    setMe: function () {
      const { jwt } = this.$cookies.get('session');
      getUser(jwt).then(res => {
        this.user = res.data;
      })
    },
    submit: function () {
      updateUser(
        this.user.id,
        { ...this.user },
        this.$cookies.get('session').jwt
      ).then(res => {
        this.setMe();
      })
    }
  },
  beforeCreate() {
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/');
    }
  },
  created() {
    this.setMe();
  },
};
</script>