<template>
  <div id="works">
    <div>
      <b-row class="row">
        <b-col cols="6">
          <b-card
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            overlay
            :img-src="require('../assets/blog.jpg')"
            img-alt="Image"
            text-variant="while"
            title="blog"
            class="card mb-2"
          >
            <b-card-text>
              WordPressで構築した<br />技術に関するブログ
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            overlay
            img-alt="Image"
            tag="article"
            title="portfolio"
            class="mb-2"
          >
            <b-card-text>
              Vue.jsで作ったこのポートフォリオサイト
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="row">
        <b-col cols="6">
          <b-card
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            overlay
            :img-src="require('../assets/squirrel.jpg')"
            img-alt="Image"
            tag="article"
            title="atsumeta"
            class="mb-2"
          >
            <b-card-text>
              企業の技術ブログをまとめたキュレーションサイト
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            overlay
            :img-src="require('../assets/simulator.jpg')"
            img-alt="Image"
            tag="article"
            title="simulator"
            class="mb-2"
          >
            <b-card-text class="card-text">
              Python, C++で作ったサーバー割り当てシミュレーター
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Works",
};
</script>

<style lang="scss" scoped>
#works {
  .row {
    margin: 20px 50px;
    .card {
      border: none;
      max-width: 30rem;
      .card-text {
      }
    }
  }
}
</style>
