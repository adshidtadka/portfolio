<template>
  <div id="home">
    <random-text
      :width="width"
      :text="text"
      :font-height="fontSize"
      :animate="animate"
      :animation-duration="animationDuration"
      :animation-speed="animationSpeed"
      :num-keyframes="numKeyframes"
    />
  </div>
</template>

<script>
import RandomText from "../components/RandomText";

export default {
  name: "home",
  components: {
    RandomText,
  },
  data() {
    return {
      text:
        "Picasso had a saying: good artists copy, great artist steal. And we have always been shameless about stealing great ideas.",
      fadeInOut: true,
      animationDuration: 4000,
      animationSpeed: 1000,
      fontSize: 59,
      numKeyframes: 20,
      animate: "in",
    };
  },
  computed: {
    width() {
      return document.body.offsetWidth * 0.6;
    },
  },
  created() {
    setInterval(() => {
      this.animate = this.animate == "in" ? "out" : "in";
    }, this.animationDuration + 5000);
  },
  methods: {
    _getWindowWidth() {
      return (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      );
    },
    _setupResizeListener() {
      let running = false;
      const throttleResize = () => {
        if (!running) {
          running = true;
          requestAnimationFrame(() => {
            window.dispatchEvent(new CustomEvent("throttledResize"));
            running = false;
          });
        }
      };
      window.addEventListener("resize", throttleResize);
      window.addEventListener("throttledResize", this._handleResize.bind(this));
    },
    _handleResize() {
      const width = this._getWindowWidth();
      if (Math.abs(width * 0.6 - this.state.width) > 100) {
        this.state.width *= 0.6;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// Styles ------------------------------------------------------
#home {
  top: 0;
  left: 0;
  min-height: 530px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #e5e5e5;
  font-family: "Inconsolata";
  font-size: 40px;
}
</style>
