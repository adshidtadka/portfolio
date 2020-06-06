<template>
  <b-navbar
    class="header animate__animated animate__fadeInDown"
    sticky
    type="dark"
    variant="transparent"
  >
    <b-navbar-brand class="header-title" href="#">adshidtadka</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Works</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  height: 80px;
  font-size: 20px;
  margin-bottom: 20px;

  .header-title {
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 0.04em;
  }
}
</style>
