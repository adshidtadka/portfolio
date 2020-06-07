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
    numKeyframe: Number,
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
      timeouts: []
    };
  },
  mounted() {
    console.log(this.animate);
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
      console.log("_fadeIn called");
      this.timeouts.push(
        setTimeout(() => {
          this.state = {
            fade: "in",
            show: true
          };
          // Disable animation after fade in
          this.timeouts.push(
            setTimeout(
              () => (this.state = { animate: false }),
              this.animationSpeed
            )
          );
        }, this.animationStart + Math.random() * this.animationSpeed)
      );
    },

    // animate out then stop rendering
    _fadeOut() {
      this.timeouts.push(
        setTimeout(() => {
          this.setState({ fade: "out", animate: true });
          this.timeouts.push(
            setTimeout(() => {
              this.setState({ show: false });
            }, this.animationSpeed)
          );
        }, this.animationStart + Math.random() * this.animationSpeed)
      );
    }
  },
  render(createElement) {
    if (!this.state.show) {
      console.log("letter render return null");
      return null;
    }
    const keyframe = Math.floor(Math.random() * this.props.numKeyframes + 1);
    const easingFunction = `cubic-bezier(${Math.random() * 0.8 +
      +0.1},0,${Math.random() * 0.5 + 0.25},1)`;
    const proportionalPosition = this.props.i / this.props.textLen;
    const transitionDelay =
      proportionalPosition / 2 + Math.random() * proportionalPosition;
    console.log("letter rendered");
    return createElement(
      "div",
      {
        class: "letter",
        style: {
          fontSize: this.fontHeight,
          height: this.fontHeight,
          width: this.fontHeight / 2,
          left: this.x,
          top: this.y,
          transition: `
          top 1s ${easingFunction} ${transitionDelay}s,
          left 1s ${easingFunction} ${transitionDelay}s,
          font-size 1s ${easingFunction} ${transitionDelay}s
          `,
          animation: this.state.animate
            ? `
            ${"fade-" + this.state.fade + "-" + keyframe}
            ${easingFunction}
            ${this.props.animationSpeed}ms forwards
            `
            : null
        }
      },
      this.char
    );
  }
};
</script>
