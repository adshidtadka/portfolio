<template>
  <div id="contact">
    <b-img class="char-img" :src="require('../assets/parrot-big.png')"></b-img>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped>
#contact {
  text-align: center;
}
.char-img {
  width: 300px;
  margin: 100px auto;
}
</style>
