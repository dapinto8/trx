<template src="./ProgramsSection.html"></template>
<style lang="scss" scoped src="./ProgramsSection.scss"></style>
<script>
export default {
  name: "ProgramsSection",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: `
        Conscientes de la realidad que estamos viviendo, nos estamos 
        adaptando a las nuevas necesidades. Por este motivo, hemos 
        lanzado unos paquetes de sesiones virtuales, con los cuales 
        podrás llegar a la mejor versión de tu cuerpo.
      `
    },
    subtitle: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true,
      default: "Más información"
    },
    isHomeView: {
      type: Boolean,
      default: false
    }
  }
};
</script>