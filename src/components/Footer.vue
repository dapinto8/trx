<template>
  <footer>
    <div class="social">
      <a href="#" target="_blank" rel="noopener noreferrer" class="mr-3">
        <g-image src="~/assets/icons/instagram.svg" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <g-image src="~/assets/icons/facebook.svg" />
      </a>
    </div>
    <div class="contact">
      <p class="title">Contact Info</p>
      <ul>
        <li>
          <g-image src="~/assets/icons/mail.svg" />
          <p>example@yahoo.com</p>
        </li>
        <li>
          <g-image src="~/assets/icons/phone.svg" />
          <p>+0 320 422 4254</p>
        </li>
        <li>
          <g-image src="~/assets/icons/map-pin.svg" />
          <p>Av. El ejercito Miraflores, Lima, Perú</p>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <p class="url">www.jesuslezamatrx.com</p>
      <p>Copyright ©2020 All rights reserved | Web made by Meftah Studio</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 1.5rem;
  text-align: center;
  background-color: $background-dark;
  color: $white;
  font-weight: 500;

  .title {
    margin: 1.5rem 0;
    font-weight: 600;
    font-size: 18px;
  }

  .contact {
    max-width: 220px;
    margin: 0 auto 2rem auto;

    ul {
      li {
        display: flex;
        margin-bottom: 1rem;
        text-align: left;

        img {
          margin-right: 1rem;
        }
      }
    }
  }

  .copyright {
    .url {
      margin: 1rem 0;
      color: $secondary; 
    }
  }
}
</style>