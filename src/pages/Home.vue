<template>
  <div>
    <div class="header">
      <h5 class="intro">Welcome to NeuroNerd</h5>
      <h2 class="welcome">
        Explore the Brain <br />
        with Me
      </h2>
    </div>

    <div class="carousel">
      <h2 class="neurohacks">#NEUROHACKS</h2>
      <div class="inner" ref="inner" :style="innerStyles">
        <div class="hack" v-for="hack in hacks" :key="hack.id">
          <img :src="hack.image" alt="image" />
        </div>
      </div>
      <div class="buttons">
        <div class="righty"><button @click="right">«</button></div>
        <div><button @click="left">»</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      hacks: [
        { image: 'https://i.imgur.com/t01bQdt.jpg' },
        { image: 'https://i.imgur.com/o03K3UB.jpg' },
        { image: 'https://i.imgur.com/NT6w1Ih.jpg' },
        { image: 'https://i.imgur.com/V4Ryul8.jpg' },
        { image: 'https://i.imgur.com/2INuJiB.jpg' },
        { image: 'https://i.imgur.com/5gA4zSC.jpg' },
        { image: 'https://i.imgur.com/LjvZicZ.jpg' },
        { image: 'https://i.imgur.com/t01bQdt.jpg' },
        { image: 'https://i.imgur.com/DtAQkfA.jpg' },
        { image: 'https://i.imgur.com/QTiVW3v.jpg' },
        { image: 'https://i.imgur.com/NT6w1Ih.jpg' },
        { image: 'https://i.imgur.com/3bVkk0k.jpg' },
        { image: 'https://i.imgur.com/RGKPZP1.jpg' }
      ],
      articles: [],
      innerStyles: {},
      step: '',
      transitioning: false
    };
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalHacks = this.hacks.length;
      this.step = `${innerWidth / totalHacks}px`;
    },

    right() {
      if (this.transitioning) return;
      this.transitioning = true;

      this.moveRight();
      this.afterTransition(() => {
        const hack = this.hacks.shift();
        this.hacks.push(hack);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    left() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const hack = this.hacks.pop();
        this.hacks.unshift(hack);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener('transitioned', listener);
      };
      this.$refs.inner.addEventListener('transitionend', listener);
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
        translateX(-${this.step})`
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
        translateX(-${this.step})`
      };
    },
    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      };
    }
  }
};
</script>
<style scoped>
.carousel {
  overflow: 1;
  /* background-color: rgba(182, 169, 169, 0.164); */
  padding-bottom: 10px;
  background-color: rgba(7, 27, 54, 255);
  /* padding-top: 20px; */
}
.neurohacks {
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  text-decoration: underline;
  font-size: 60px;
  padding: 15px;
  margin-left: 50px;
  /* justify-content: space-around; */
  width: 100%;
  color: rgba(160, 232, 245, 0.692);
}

.intro {
  padding-top: 70px;
  display: flex;
  margin-bottom: 0px;
  font-size: 28px;
  margin-left: 100px;
  color: rgba(255, 255, 255, 0.842);
  text-transform: initial;
  font-style: italic;
}
.welcome {
  display: flex;
  margin-left: 80px;
  margin-top: 40px;
  justify-content: start;
  color: white;
  text-transform: initial;
  max-width: 500px;
  /* font-style: italic; */
  font-size: 90px;
  position: absolute;
  text-shadow: 34px 25px 5px rgba(255, 255, 255, 0.116);
}
.buttons {
  margin-top: 30px;
  display: flex;
  align-items: center;
  margin-left: 33%;
  /* justify-content: space-around; */
}

button {
  width: 260px;
  height: 120px;
  border-radius: 25px;
  margin-bottom: 65px;
  margin: 5px;
  margin-bottom: 20px;
  font-size: 100px;
  opacity: 80%;
  background-image: linear-gradient(to right, #ecf5d49c, #91ceeb, #8ecacb);
  color: white;
  border: 3px solid rgba(255, 255, 255, 0.644);
}
button:hover {
  font-weight: bolder;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.877);
}

.inner {
  white-space: nowrap;
  transition: transform 1s;
}

.hack {
  width: 300px;
  height: 350px;
  /* margin-left: 70px; */
  margin-right: 70px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hack:hover {
  transform: translateY(-55px) translateX(-50px);
}

img {
  margin-top: 20px;
  max-height: 290px;
  /* border: 14px solid rgba(173, 231, 248, 0.582); */
  border: 14px solid rgba(23, 56, 78, 0.658);
  border-radius: 10px;
}
img:hover {
  border: 14px solid rgb(111, 55, 216);
  border-radius: 10px;
  transform: scale(1.2);
  filter: brightness(110%);
}

.header {
  background-image: url('https://i.imgur.com/RBYkJmr.jpg');
  background-size: 1990px;
  background-repeat: no-repeat;
  height: 650px;
  opacity: 0.9;
  color: white;
}
</style>
