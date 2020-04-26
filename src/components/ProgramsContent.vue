<template>
  <section class="programs">
    <div class="container">
      <div class="content">
        <div class="content-wrapper">
          <h2 class="title-section">Programas</h2>
          <h3 class="subtitle-section">
            Descubre una nueva
            <br />versión de tu cuerpo
          </h3>
          <p class="description dark">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore 
          </p>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud
          </p>
          <button class="secondary">
            Más información
            <g-image src="~/assets/icons/arrow-right.svg" alt="Más información" class="icon-right" />
          </button>
        </div>
      </div>
      <div class="images">
        <div class="left">
          <g-image src="~/assets/images/program-left@2x.jpg" alt="Training" />
        </div>
        <div class="right">
          <g-image src="~/assets/images/program-right@2x.jpg" alt="Training" />
        </div>
        <div class="video">
          <g-image src="~/assets/images/program-video@2x.jpg" alt="Training" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.programs {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(472px, 1fr));
    gap: 1rem;

    .content {
      max-width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .content-wrapper {
        .description {
          margin: 1rem 0;
          font-size: 14px;

          &.dark {
            font-size: 16px;
            font-weight: 500;
          }
        }

        button {
          margin-bottom: 2rem;
        }
      }
    }

    .images {
      margin-left: -1.5rem;
      margin-right: -1.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 12px;

      img {
        width: 100%;
      }

      .left {
        grid-row: 1;
        grid-column: 1;
      }

      .right {
        grid-row: 1;
        grid-column: 2;
      }

      .video {
        grid-row: 2;
        grid-column: 1 / 3;
      }
      
    }
  }

  @media (min-width: 1024px) {
    .container {
      .images {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
}
</style>
