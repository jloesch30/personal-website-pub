<template>
  <div>
    <the-nav></the-nav>
  </div>
  <body>
    <section>
      <div class="container">
        <div class="header">
          <h4 id="header--primary">About Me</h4>
          <h5 id="header--subheader">Who is Josh?</h5>
        </div>
        <div class="p-content-container">
          <p id="paragraph">
            I am currently a senior at the University of Texas at Austin
            pursuing a bachelors in Economics and a Masters of Science in
            Information Technology Management with the McCombs School of
            Business. Both my bachelors and masters degree have been a great
            asset to me in saturating my passions through technology, business,
            and mathematics while gaining valuable experience solving real world
            problems. Throughout my college education, I have gained a
            foundational understanding in both quantitative and qualitative
            points of views, allowing me to think abstractly when developing
            solutions.
          </p>
        </div>
        <div class="container--spacer-image">
          <img
            id="spacer-image"
            src="../assets/imgs/mccombs.png"
            alt="ut-austin"
          />
        </div>
        <div class="p-content-container">
          <p id="p-content-description">
            While attending UT I have had the privilege to serve as the
            Fundraising Officer, Vice President, and now currently the President
            of Texas Rotaract, a non-profit organization serving under the
            standards of the Rotary International Club. Our organization has
            developed a welcoming space for a diverse group of students to serve
            Austin’s local community in any way possible including trash
            pickups, garden restorations, food deliveries, school events, and
            much more. Along with school-related activities, I also practice
            Brazilian jiu-jitsu and dabble in photography; Coming from a
            wrestling background, jiu-jitsu has been a great way for me to
            continue practicing martial arts and stay active during University,
            while photography allows me the opportunity to express my creativity
            through a lens of a camera and share the images on my social media.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="split">
          <div class="container--split-image">
            <img
              id="split--image"
              :src="require('../assets/imgs/family.jpg')"
              alt="faimily photo"
            />
          </div>
          <div class="container--split-p">
            <p id="p-content-description">
              I am currently scheduled to graduate in May of 2021 with a Bachelors
              in Economics and May of 2022 with a Masters in Science of
              Information Technology Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>
<script>
import M from "materialize-css";
import TheNav from "@/components/TheNav.vue";
import { onMounted } from "vue";
export default {
  components: {
    TheNav,
  },
  data() {
    return {};
  },
  setup() {
    onMounted(() => {
      M.AutoInit();
    });
  },
  /* ------- alternative method with dynamic classes ------- */
  // created() {
  //   window.addEventListener("resize", this.windowEventHandler);
  // },
  // methods: {
  //   windowEventHandler(e) {
  //     console.log('window changed size', e);
  //     if (window.innerWidth > 800) {
  //       this.contentOrientationRow = false;
  //     } else if (window.innerWidth <= 800) {
  //       this.contentOrientationRow = true;
  //     }
  //   }
  // },
};
</script>

<style scoped>

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  line-height: 1;
  margin-bottom: 0.5em;
}

img {
  margin: 3% 0
}

.container {
  margin-inline: auto;
  width: min(95%, 70.5rem);
}

.container {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 50em) {
  .header {
    align-items: flex-start;
  }
}

#header--primary {
  font-weight: bold;
}

.container--spacer-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

#spacer-image {
  width: 50%;
  min-width: 200px;
}

@media (min-width: 50em) {
  .split {
    display: flex;
    flex-direction: row;
  }
}

.container--split-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 50em) {
  .container--split-image {
    display: inline;
    flex: 1 1 0px;
    margin-right: 3rem;
  }
  .container {
    flex-basis: 100%;
  }
  .container--split-p{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

#split--image {
  width: 50%;
  min-width: 200px;
}

@media (min-width: 50em) {
  #split--image {
    width: 400px;
  }
}

</style>
