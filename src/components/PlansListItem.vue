<template>
  <div class="plans-list-item">
    <div v-if="name">
      <p class="name">{{ name }}</p>
      <p class="description">{{ description }}</p>
      <p class="price">{{ price }}</p>
    </div>
    <div v-else>
      <p class="next">
        Más 
        <br /> Adelante
      </p>
    </div>
    <button :class="name ? 'secondary' : 'grey'" >
      {{ name ? '¡Comprar ahora!' : '¡Proximamente!' }}
      <g-image src="~/assets/icons/arrow-right.svg" alt="Más información" class="icon-right" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PlansListItem',
  props: {
    name: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.plans-list-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 225px;
  min-height: 215px;
  padding: 2rem 1rem 4rem;
  text-align: center;
  background-color: $white;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  .name {
    max-width: 200px;
    margin: auto;
    color: $black;
    font-size: 21px;
    font-weight: 600;
  }

  .description {
    margin: 1.5rem 0;
    color: $grey;
  }

  .price {
    color: $black;
    font-size: 37px;
    font-weight: 800;
  }

  .next {
    color: $grey2;
    font-size: 36px;
    font-weight: 600;
  }

  button {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
  }
}
</style>