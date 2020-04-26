<template>
  <main-layout>
    <section class="home">
      <div class="hero background blend">
        <div class="container hero-text">
          <h3>
            Entrenaen casa o
            <br />desde donde estés
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />adipiscing elit, sed do eiusmod tempor
            <br />incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="newsletter">
        <div class="container py-4">
          <h3>Entérate de nuestras novedades</h3>
          <div class="form">
            <input type="email" name="email" id="email" placeholder="Correo Electrónico">
            <button>
              Suscribirse
              <g-image src="~/assets/icons/send.svg" alt="Suscribirse" class="icon-right" />
            </button>
          </div>
        </div>
      </div>
      <ProgramsContent />
      <PlansList />
      <div class="d-none">
        <p>Home</p>
        <g-image alt="Example image" src="~/favicon.png" width="135" />
        <h1>Hello, world!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
          Dolores, aperiam non officia eos quod asperiores
        </p>
        <p class="home-links">
          <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
          <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
        </p>
      </div>
    </section>
  </main-layout>
</template>

<script>
import ProgramsContent from "~/components/ProgramsContent";
import PlansList from "~/components/PlansList";

export default {
  components: {
    ProgramsContent,
    PlansList
  }
}
</script>

<style lang="scss" scoped>
.home {
  .hero {
    position: relative;
    overflow: hidden;
    background-image: url("~@/assets/images/hero.jpg");

    img {
      position: absolute;
      top: 0;
      left: 0;
    }

    .hero-text {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 440px;
      color: $white;

      h3 {
        margin-bottom: 1rem;
        line-height: 1.3;
        font-size: 29px;
        font-weight: 800;
      }

      p {
        font-size: 14px;
      }
    }
  }

  .newsletter {
    background-color: $black;

    h3 {
      margin-bottom: 1rem;
      font-size: 18px;
      font-weight: 800;
      color: $white;
    }

    .form {
      display: flex;

      input {
        width: 100%;
      }

      button {
        flex: 2;
        margin-left: 8px;
      }
    }
  }

  @media (min-width: 1024px) {
    .hero {
      .hero-text {
        h3 {
          font-size: 62px;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
}
</style>