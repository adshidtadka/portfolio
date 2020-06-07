<template>
  <div id="home">
    <cycle-loader></cycle-loader>
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
import CycleLoader from "../components/CycleLoader";
import RandomText from "../components/RandomText";

export default {
  name: "home",
  components: {
    CycleLoader,
    RandomText
  },
  data() {
    return {
      text:
        "Picasso had a saying: good artists copy, great artist steal. And we have always been shameless about stealing great ideas.",
      fadeInOut: true,
      animationDuration: 4000,
      animationSpeed: 1000,
      fontSize: 50,
      numKeyframes: 20,
      animate: "in"
    };
  },
  computed: {
    width: () => {
      document.body.offsetWidth * 0.6;
    },
    swichAnimate: () => {
      this.animate = this.animate == "in" ? "out" : "in";
    }
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
      // Create "window.throttledResize" event that listens to resize and throttles it to fire once per frame at most
      // https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent
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
        this.setState({ width: width * 0.6 });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// Vars --------------------------------------------------------

// Keep synced w/ js
$numKeyframes: 20;

$fadeRadius: 150;
@function randomAbout0($domain) {
  @return random(2 * $domain) - $domain;
}

// Styles ------------------------------------------------------
body,
#app {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 480px;
  width: 100%;
  min-width: 320px;
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: radial-gradient(circle, #222, #0e0e0e);
  color: white;
  font-family: "Inconsolata";
  font-size: 40px;
}

.container {
  position: relative;
}

.letter {
  position: absolute;
}

@for $i from 1 through $numKeyframes {
  @keyframes fade-in-#{$i} {
    from {
      opacity: 0;
      transform: translate3d(
          randomAbout0($fadeRadius) + 0px,
          randomAbout0($fadeRadius) + 0px,
          randomAbout0($fadeRadius) + 0px
        )
        rotate3d(random(), random(), random(), 180deg);
      filter: blur(5px);
    }
    to {
      opacity: 1;
      transform: none;
      filter: unset;
    }
  }
  @keyframes fade-out-#{$i} {
    from {
      opacity: 1;
      transform: none;
      filter: unset;
    }
    to {
      opacity: 0;
      transform: translate3d(
          randomAbout0($fadeRadius) + 0px,
          randomAbout0($fadeRadius) + 0px,
          randomAbout0($fadeRadius) + 0px
        )
        rotate3d(random(), random(), random(), 180deg);
      filter: blur(5px);
    }
  }
}
</style>
