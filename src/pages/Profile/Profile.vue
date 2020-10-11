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
        height: '',
        password: '',
        confirmPassword: ''
      },
      pwdError: ''
    };
  },
  methods: {
    setMe: function () {
      const { jwt } = this.$cookies.get('session');
      getUser(jwt).then((res) => {
        this.user = res.data;
      });
    },
    changePassword: function () {
      if (this.user.password === this.user.confirmPassword) {
        this.pwdError = '';
        updateUser(
          this.user.id,
          { password: this.user.password },
          this.$cookies.get('session').jwt
        ).then((res) => {
          this.user.password = '';
          this.user.confirmPassword = '';
        });
      } else {
        this.pwdError = 'Las constraseñas deben coincidir';
      }
    },
    submit: function () {
      updateUser(
        this.user.id,
        { ...this.user },
        this.$cookies.get('session').jwt
      ).then((res) => {
        this.setMe();
      });
    }
  },
  mounted() {
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/');
    } else {
      this.setMe();
    }
  }
};
</script>