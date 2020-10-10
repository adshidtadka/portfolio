<template>
  <div id="works">
    <div>
      <b-card
        v-b-modal.modal-blog
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
        <b-card-text class="text">
          WordPressで構築した
          <br />技術に関するブログ
        </b-card-text>
        <b-modal centered id="modal-blog" title="blog" hide-footer>
          サーバーとドメインを借りて自分で運用しています。
          <b-link
            href="https://blog.adshidtadka.com"
            target="_blank"
            class="link"
          >https://blog.adshidtadka.com</b-link>
        </b-modal>
      </b-card>
      <b-card
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        overlay
        :img-src="require('../assets/portfolio.png')"
        tag="article"
        title="portfolio"
        class="card mb-2"
      >
        <b-card-text>Vue.jsで作ったこのポートフォリオサイト</b-card-text>
        <b-modal centered id="modal-portfolio" title="portfolio" hide-footer>自分の技術力を示すためのものとして作りました。</b-modal>
      </b-card>
      <b-card
        v-b-modal.modal-atsumeta
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        overlay
        :img-src="require('../assets/squirrel.jpg')"
        img-alt="Image"
        tag="article"
        title="atsumeta"
        class="card mb-2"
      >
        <b-card-text>企業の技術ブログをまとめたキュレーションサイト</b-card-text>
        <b-modal
          centered
          id="modal-atsumeta"
          title="atsumeta"
          hide-footer
        >ハッカソンで賞を取ったアイディアを形にしたものです。開発中です。</b-modal>
      </b-card>
      <b-card
        v-b-modal.modal-simulator
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        overlay
        :img-src="require('../assets/simulator.jpg')"
        img-alt="Image"
        tag="article"
        title="simulator"
        class="card mb-2"
      >
        <b-card-text class="card-text">Python, C++で作ったサーバー割り当てシミュレーター</b-card-text>
        <b-modal centered id="modal-simulator" title="simulator" hide-footer>
          <b-link
            class="link"
            href="https://www.jstage.jst.go.jp/article/transcom/advpub/0/advpub_2020EBP3006/_article"
            target="_blank"
          >分散サーバー割り当て問題</b-link>をアルゴリズムとソルバーで解いて実行時間を比較する
          <b-link
            class="link"
            href="https://github.com/adshidtadka/server-allocation"
            target="_blank"
          >シミュレーター</b-link>を作りました。
          <br />
        </b-modal>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Works",
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/rfs/scss";

#works {
  .card {
    border: none;
    @include font-size(1rem);
  }
}
.link {
  color: #007bff;
}
</style>
