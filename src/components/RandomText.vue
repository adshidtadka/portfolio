<script charset="utf-8">
import Letter from "./Letter";

export default {
  name: "RandomText",
  components: {
    Letter
  },
  props: {
    text: String,
    className: String,
    width: Number,
    fontHeight: Number,
    animationSpeed: Number,
    animationDuration: Number,
    animate: String,
    homePage: Boolean,
    numKeyframes: Number
  },
  data() {
    return {
      state: {
        numRows: null,
        chars: null,
        updated: false
      }
    };
  },
  watch: {
    fontHeight() {
      this.state = this._mapCharPositions();
    },
    width() {
      this.state = this._mapCharPositions();
    }
  },
  mounted() {
    this.state = this._mapCharPositions();
  },
  methods: {
    // returns an array of chars w/ form [x, y, char]
    _mapCharPositions() {
      const fontWidth = this.fontHeight / 2;
      const charsPerRow = Math.floor(this.width / fontWidth);
      const emptySpaceInRow = this.width - charsPerRow * fontWidth;
      const margin = emptySpaceInRow / (charsPerRow + 1);
      const chars = [];
      let text = this.text.trim();
      let textLength = text.length;

      let firstLetterOfWord = true;
      for (let i = 0; i < textLength; i++) {
        const col = i % charsPerRow;

        if (text[i] === " ") {
          firstLetterOfWord = true;
          if (col === 0) {
            text = text.slice(0, i) + text.slice(i + 1);
            i--;
            textLength--;
          }
        } else {
          // Handle text wrapping
          if (firstLetterOfWord) {
            let wordLength = 1;
            let wordCounter = 1;
            while (
              i + wordCounter < text.length &&
              text[i + wordCounter] !== " "
            ) {
              wordLength++;
              wordCounter++;
            }
            firstLetterOfWord = false;

            const charsLeftInRow = charsPerRow - col;
            const indOfLastCharInRow = i + charsLeftInRow;
            // If the word is too long to fit on one line hyphenate it
            if (wordLength > charsPerRow) {
              text =
                text.slice(0, indOfLastCharInRow - 1) +
                "-" +
                text.slice(indOfLastCharInRow - 1);
              textLength++;
            }
            // Else insert spaces and adjust textLength to skip the word to the next line
            else if (wordLength > charsLeftInRow) {
              text = text.slice(0, i) + " ".repeat(wordLength) + text.slice(i);
              textLength += wordLength;
            }
          }
          // Push the char at i into the return arr
          chars.push([
            col * fontWidth + margin * (col + 1), // x
            Math.floor(i / charsPerRow) * this.fontHeight, // y
            text[i]
          ]);
        }
      }
      const numRows = Math.ceil(textLength / charsPerRow);
      return { numRows, chars, updated: true };
    }
  },
  render(createElement) {
    if (this.state.chars == null) {
      return null;
    } else {
      return createElement(
        "div",
        {
          class: {
            container: true
          },
          style: {
            height: this.state.numRows * this.fontHeight,
            width: this.width
          }
        },
        this.state.chars.map((char, i) => {
          return createElement(Letter, {
            props: {
              x: char[0],
              y: char[1],
              char: char[2],
              fontHeight: this.fontHeight,
              numKeyframes: this.numKeyframes,
              key: i,
              i: i,
              textLen: this.text.length,
              animate: this.animate,
              animationSpeed: this.animationSpeed,
              animationStart:
                ((this.animationDuration - this.animationSpeed) /
                  this.state.chars.length) *
                i
            }
          });
        })
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  top: -140px;
  left: 120px;
}
</style>
