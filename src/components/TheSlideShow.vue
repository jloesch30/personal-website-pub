<template>
  <section>
    <div class="slide-show-wrapper">
      <div class="mySlides container center">
        <img
          class="responsive-img"
          :class="{ hide: !i1.show }"
          :src="require(`../assets/imgs/${i1.url}`)"
          alt=""
        />
        <img
          class="responsive-img"
          :class="{ hide: !i2.show }"
          :src="require(`../assets/imgs/${i2.url}`)"
          alt=""
        />
        <img
          class="responsive-img"
          :class="{ hide: !i3.show }"
          :src="require(`../assets/imgs/${i3.url}`)"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
      slideIndex: 0,
    };
  },
  props: {
    i1: {
      type: Object,
      required: true,
    },
    i2: {
      type: Object,
      required: true,
    },
    i3: {
      type: Object,
      required: true,
    },
  },
  methods: {
    pushSlides() {
      console.log("setting image attributes");
      this.slides.push(this.i1);
      this.slides.push(this.i2);
      this.slides.push(this.i3);
    },
  },
  mounted() {
    // set slides in an array
    this.pushSlides();
    console.log(this.slides);

    // showSlides, arrow function to still reference "this"
    var showSlides = () => {
      this.slides.forEach((element) => {
        console.log("in for each");
        if (element.id === this.slideIndex) {
          element.show = true;
        } else {
          element.show = false;
        }
      });
      if (this.slideIndex + 1 >= this.slides.length) {
        this.slideIndex = 0;
      } else {
        this.slideIndex++;
      }
    };

    // image cycle
    setInterval(() => {
      console.log("changing image");
      showSlides();
    }, 2000);
  },
  computed: {},
};
</script>

<style scoped>
img {
  width: 70%;
  height: auto;
  margin: 3rem;
}
.hide {
  display: none;
}
.slide-show-wrapper {
  background-color: rgb(235, 235, 235);
}
</style>