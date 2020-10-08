<template src="./SignUp.html"></template>
<style lang="scss" scoped src="./SignUp.scss"></style>
<script>
import { signUp } from '~/services/authService';

export default {
  name: 'SignUp',
  metaInfo: {
    title: 'Regístrate',
    meta: [
      {
        name: 'description',
        content: 'Regístrate para matenerte al tanto de nuestras novedades'
      },
      {
        name: 'keywords',
        content: 'Registro, Training, TRX Trainer'
      }
    ]
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      birthdate: null,
      phone: null,
      email: null,
      password: null,
      success: '',
      errors: []
    };
  },
  methods: {
    checkForm: function () {
      if (
        this.firstName &&
        this.lastName &&
        this.birthdate &&
        this.phone &&
        this.email &&
        this.password
      ) {
        return true;
      }

      this.errors = [];
      if (!this.firstName) this.errors.push('El nombre es requerido');
      if (!this.lastName) this.errors.push('El apellido es requerido');
      if (!this.birthdate) this.errors.push('La fecha de nacimiento es requerida');
      if (!this.phone) this.errors.push('El teléfono es requerido');
      if (!this.email) this.errors.push('El correo electrónico es requerido');
      if (!this.password) this.errors.push('La contraseña es requerida');

      return false;
    },
    clearForm: function () {
      this.firstName = '';
      this.lastName = '';
      this.birthdate = '';
      this.phone = '';
      this.email = '';
      this.password = '';
    },
    submit: function (event) {
      if (!this.checkForm()) return;

      const response = signUp({
        name: this.firstName,
        last_name: this.lastName,
        birthdate: this.birthdate,
        phone: this.phone,
        username: this.email,
        email: this.email,
        password: this.password
      });

      response
        .then(data => {
          console.log(data);
          this.clearForm();
          this.success = '¡Registro exitoso!'
        })
        .catch(err => {
          this.errors.push('El correo electrónico ya está siendo utilizado');
        });
    }
  }
};
</script>