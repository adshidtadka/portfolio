<template>
  <div id="works">
    <b-img class="char-img" :src="require('../assets/parrot-big.png')"></b-img>
  </div>
</template>

<script>
export default {
  name: "Works"
};
</script>

<style lang="scss" scoped>
#works {
  text-align: center;
}
.char-img {
  width: 300px;
  margin: 100px auto;
}
</style>
