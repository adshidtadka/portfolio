<template>
  <div id="about">
    <b-row class="proverb-row" align-h="center" align-v="center">
      <b-col lg="6">
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
        <p class="text" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
          "素晴らしいアーティストはコピーし,
          偉大なアーティストは盗む"、スティーブ・ジョブズが引用したピカソの名言です。模倣し会得する貪欲さが自分の強みだと思っています。
        </p>
      </b-col>
      <b-col lg="3">
        <b-img
          class="char-img d-none d-lg-block"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          :src="require('../assets/parrot-left.png')"
        />
      </b-col>
    </b-row>
    <h2 class="second-headline">Skillset</h2>
    <b-row
      v-for="skill in skills"
      :key="skill.name"
      class="skill-row"
      align-h="center"
      align-v="center"
    >
      <b-col lg="2">
        <b-img class="skill-img" width="40px" :src="require('../assets/' + skill.name + '.png')" />
        <span>{{ skill.formalName }}</span>
      </b-col>
      <b-col lg="8">
        <k-progress
          bg-color="#363636"
          color="#e5e5e5"
          cut-color="#363636"
          :percent="skill.percent"
          :line-height="12"
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
  data() {
    return {
      skills: [
        { formalName: "HTML", name: "html", percent: 60 },
        { formalName: "CSS", name: "css", percent: 60 },
        { formalName: "Javascript", name: "js", percent: 50 },
        { formalName: "Typescript", name: "ts", percent: 40 },
        { formalName: "WordPress", name: "wordpress", percent: 40 },
        { formalName: "Vue.js", name: "vuejs", percent: 40 },
        { formalName: "Angular", name: "angular", percent: 40 },
        { formalName: "Swift", name: "swift", percent: 30 },
        { formalName: "React", name: "react", percent: 20 },
        { formalName: "Python", name: "python", percent: 60 },
        { formalName: "C++", name: "cpp", percent: 60 },
        { formalName: "MySQL", name: "mysql", percent: 60 },
        { formalName: "PHP", name: "php", percent: 40 },
        { formalName: "Docker", name: "docker", percent: 40 },
        { formalName: "Kubernetes", name: "k8s", percent: 30 },
        { formalName: "Go", name: "go", percent: 30 },
        { formalName: "Ruby", name: "ruby", percent: 30 },
        { formalName: "Java", name: "java", percent: 30 },
        { formalName: "Vim", name: "vim", percent: 20 },
      ],
    };
  },
  components: {
    KProgress,
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/rfs/scss";

#about {
  .proverb-row {
    margin: 50px auto;
    .proverb {
      @include font-size(1.5rem);
      text-align: justify;
    }
    .text {
      @include font-size(1.2rem);
      text-align: justify;
    }
    .char-img {
      width: 150px;
    }
  }
  .second-headline {
    margin: 30px auto;
    text-align: center;
  }
  .skill-row {
    margin: 10px auto;
    .skill-img {
      width: 40px;
      margin-right: 15px;
    }
  }
}
</style>
