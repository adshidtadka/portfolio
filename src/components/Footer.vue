<template>
  <div id="footer">
    <b-breadcrumb
      v-if="route != '/'"
      class="breadcrumb animate__animated animate__fadeInUp"
    >
      <b-breadcrumb-item class="item" to="/">
        <b-icon
          icon="house-fill"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item class="item" :to="route">
        {{ route.slice(1) }}
      </b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
  props: ["route"],
};
</script>

<style lang="scss" scoped>
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  .breadcrumb {
    background-color: transparent;
    .item {
      color: #e5e5e5;
      opacity: 0.5;
    }
    .item:hover {
      color: #e5e5e5;
      opacity: 1;
    }
  }
}
</style>
