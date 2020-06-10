<template>
  <b-navbar
    class="header animate__animated animate__fadeInDown"
    type="dark"
    variant="transparent"
  >
    <b-navbar-brand class="header-title" to="/">
      <b-img
        class="icon"
        :src="require('../assets/parrot-icon.png')"
        alt="parrot icon"
      />
      <h1 class="header-title-text">adshidtadka</h1>
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/works">Works</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  height: 80px;
  font-size: 20px;
  margin-bottom: 20px;

  .header-title {
    .icon {
      width: 30px;
      margin-right: 5px;
      margin-bottom: 17px;
    }
    .header-title-text {
      display: inline;
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 0.04em;
      color: #e5e5e5;
    }
  }
}
</style>
