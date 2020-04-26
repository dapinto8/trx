<template>
  <header>
    <div class="brand">
      <g-link to="/">
        <g-image src="~/assets/images/brand/logo@3x.png" width="150px"/>
      </g-link>
    </div>
    <div class="menu">
      <div class="menu-item"></div>
      <div class="menu-item"></div>
      <div class="menu-item"></div>
    </div>
    <nav class="nav d-none">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/programs">Programs</g-link>
      <g-link class="nav__link" to="/contact">Contact</g-link>
      <g-link class="nav__link" to="/sign-in">Sign in</g-link>
      <g-link class="nav__link" to="/sign-up">Sign up</g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: $black;

  .menu {
    .menu-item {
      width: 24px;
      height: 2px;
      background-color: $white;
      border-radius: 4px;

      &:not(:last-child) {
        margin-bottom: 6px;
      }
    }
  }
}
</style>