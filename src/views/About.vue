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
          スティーブ・ジョブズが引用したピカソの名言です。私は模倣が得意で多くのスキルがあるのですが,
          突出した強みがありません。模倣を超えられるように日々努力しています。
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
    <b-row
      v-for="skill in skills"
      :key="skill.name"
      class="skill-row"
      align-h="center"
      align-v="center"
    >
      <b-col cols="2">
        <b-img
          class="skill-img"
          width="40px"
          :src="require('../assets/' + skill.name + '.png')"
        />
        <span>{{ skill.formalName }}</span>
      </b-col>
      <b-col cols="8">
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
        { formalName: "javascript", name: "js", percent: 50 },
        { formalName: "WordPress", name: "wordpress", percent: 40 },
        { formalName: "Vue.js", name: "vuejs", percent: 40 },
        { formalName: "swift", name: "swift", percent: 30 },
        { formalName: "React", name: "react", percent: 20 },
        { formalName: "Python", name: "python", percent: 60 },
        { formalName: "C++", name: "cpp", percent: 60 },
        { formalName: "MySQL", name: "mysql", percent: 60 },
        { formalName: "PHP", name: "php", percent: 40 },
        { formalName: "Docker", name: "docker", percent: 40 },
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
