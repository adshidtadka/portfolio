<template>
  <transition name="fade">
    <div
      class="letter"
      v-show="state.show"
      :style="{
        fontSize: fontHeight + 'px',
        height: fontHeight + 'px',
        width: fontHeight / 2 + 'px',
        left: x + 'px',
        top: y + 'px',
        transitionProperty: 'top, left, font-size',
        transitionDuration: 1 + 's',
        transitionTimingFunction: easingFunction,
        transitionDelay: transitionDelay,
        animation: animationString
      }"
    >
      {{ char }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "Letter",
  props: {
    x: Number,
    y: Number,
    i: Number,
    textLen: Number,
    char: String,
    fontHeight: Number,
    numKeyframes: Number,
    animate: String,
    animationSpeed: Number,
    animationStart: Number
  },
  data() {
    return {
      state: {
        show: false,
        animate: true
      },
      timeouts: [],
      easingFunction: null,
      transitionDelay: null,
      animationString: null
    };
  },
  mounted() {
    const keyframe = Math.floor(Math.random() * this.numKeyframes + 1);
    this.easingFunction = `cubic-bezier(${Math.random() * 0.8 +
      +0.1},0,${Math.random() * 0.5 + 0.25},1)`;
    const proportionalPosition = this.i / this.textLen;
    this.transitionDelay =
      proportionalPosition / 2 + Math.random() * proportionalPosition;

    this.animationString = this.state.animate
      ? `${"fade-" + this.state.fade + "-" + keyframe} ${this.easingFunction} ${
          this.animationSpeed
        }ms forwards `
      : null;
    if (this.animate === "in") {
      this._fadeIn();
    }
  },
  destroy() {
    this.timeouts.forEach(timeout => clearTimeout(timeout));
  },
  watch: {
    animate(val) {
      if (nextProps.animate === "in") {
        this._fadeIn();
      } else {
        this._fadeOut();
      }
    }
  },
  methods: {
    // render component and animate in
    _fadeIn() {
      this.timeouts.push(
        setTimeout(() => {
          this.state.fade = "in";
          this.state.show = true;
          // Disable animation after fade in
          this.timeouts.push(
            setTimeout(() => (this.state.animate = false), this.animationSpeed)
          );
        }, this.animationStart + Math.random() * this.animationSpeed)
      );
    },
    // animate out then stop rendering
    _fadeOut() {
      this.timeouts.push(
        setTimeout(() => {
          this.state.fade = "out";
          this.state.animate = true;
          this.timeouts.push(
            setTimeout(() => (this.state.show = false), this.animationSpeed)
          );
        }, this.animationStart + Math.random() * this.animationSpeed)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.letter {
  position: absolute;
}

// Keep synced w/ js
$numKeyframes: 20;
// Vars --------------------------------------------------------
$fadeRadius: 150;

@function randomAbout0($domain) {
  @return random(2 * $domain) - $domain;
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
