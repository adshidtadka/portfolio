<template>
  <b-navbar
    class="header animate__animated animate__fadeInDown"
    type="dark"
    variant="transparent"
    toggleable="md"
  >
    <b-navbar-brand class="header-title" to="/">
      <b-img class="icon" :src="require('../assets/parrot-icon.png')" alt="parrot icon" />
      <h1 class="header-title-text">adshidtadka</h1>
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-item" to="/about">About</b-nav-item>
        <b-nav-item class="nav-item" to="/works">Works</b-nav-item>
        <b-nav-item class="nav-item" to="/contact">Contact</b-nav-item>
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
@import "../../node_modules/rfs/scss";

.header {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;

  .header-title {
    .icon {
      width: 30px;
      margin-right: 5px;
      margin-bottom: 17px;
    }
    .header-title-text {
      display: inline;
      @include font-size(2rem);
      font-weight: bold;
      letter-spacing: 0.04em;
      color: #e5e5e5;
    }
  }

  .nav-item {
    @include font-size(1.2rem);
  }
}
</style>
