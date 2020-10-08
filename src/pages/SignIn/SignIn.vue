<template src="./SignIn.html"></template>
<style lang="scss" scoped src="./SignIn.scss"></style>
<script>
import { signIn } from '~/services/authService';

export default {
  name: 'SignIn',
  metaInfo: {
    title: 'Inicia Sesión',
    meta: [
      {
        name: 'description',
        content: 'Entra y descrubre una nueva versión de tu cuerpo'
      },
      {
        name: 'keywords',
        content: 'Iniciar sesión, Training, TRX Trainer'
      }
    ]
  },
  data() {
    return {
      email: null,
      password: null,
      errors: []
    };
  },
  methods: {
    checkForm: function () {
      if (
        this.email &&
        this.password
      ) {
        return true;
      }

      this.errors = [];

      if (!this.email) this.errors.push('El correo electrónico es requerido');
      if (!this.password) this.errors.push('La contraseña es requerida');

      e.preventDefault();
    },
    clearForm: function () {
      this.email = '';
      this.password = '';
    },
    submit: function (event) {
      if (!this.checkForm()) return;

      const response = signIn({
        identifier: this.email,
        password: this.password
      });

      response
        .then(({ data }) => {
          this.clearForm();
          this.$cookies.set('session', data);
          this.$router.push('/home');
        })
        .catch(err => {
          this.errors.push('Correo electrónico y/o contraseña incorrectos');
        });
    }
  }
};
</script>