<template>
  <div id="about">
    <b-row class="proverb-row" align-h="center" align-v="center">
      <b-col cols="6">
        <p
          class="proverb"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          "Picasso had a saying: good artists copy, great artist steal. And we
          have always been shameless about stealing great ideas."
        </p>
        <br />
        <p
          class="text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          スティーブ・ジョブズが引用したピカソの名言です。僕は模倣が得意で多くのスキルがあるのですが,
          突出したなにかがありません。模倣を超えられるように日々努力しています。
        </p>
      </b-col>
      <b-col cols="3">
        <b-img
          class="char-img"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          :src="require('../assets/parrot-left.png')"
        />
      </b-col>
    </b-row>
    <h2 class="second-headline">
      Skillset
    </h2>
    <b-row class="skill-row" align-h="center">
      <b-col cols="10">
        <k-progress
          bg-color="#363636"
          color="#e5e5e5"
          percent="60"
        ></k-progress>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import KProgress from "k-progress";
import Aos from "aos";

export default {
  name: "About",
  components: {
    KProgress,
  },
};
</script>

<style lang="scss" scoped>
#about {
  .proverb-row {
    margin: 230px auto;
    .proverb {
      font-size: 23px;
      text-align: justify;
      margin-right: 45px;
    }
    .text {
      font-size: 20px;
      text-align: justify;
      margin-right: 45px;
    }
    .char-img {
      width: 150px;
    }
  }
  .second-headline {
    margin: 20px auto;
    text-align: center;
  }
  .skill-row {
    margin: 100px auto;
  }
}
</style>
