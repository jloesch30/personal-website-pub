<template>
  <body>
    <div>
      <the-nav></the-nav>
    </div>
    <section class="content-container-col">
      <div class="header-container">
        <h4 class="header">About Me</h4>
      </div>
      <div>
        <h5 class="header--sub-header">Who is Josh?</h5>
      </div>
      <p id="paragraph">
        I am currently a senior at the University of Texas at Austin pursuing a
        bachelors in Economics and a Masters of Science in Information
        Technology Management with the McCombs School of Business. Both my
        bachelors and masters degree have been a great asset to me in saturating
        my passions through technology, business, and mathematics while gaining
        valuable experience solving real world problems. Throughout my college
        education, I have gained a foundational understanding in both
        quantitative and qualitative points of views, allowing me to think
        abstractly when developing solutions.
      </p>
    </section>
    <section class="content-container-col">
      <div class="image-container">
        <img
          class="image-spacer"
          src="../assets/imgs/mccombs.png"
          alt="ut-austin"
        />
      </div>
    </section>
    <section class="content-container-col">
      <div class="p-content-container">
        <p id="p-content-description">
          While attending UT I have had the privilege to serve as the
          Fundraising Officer, Vice President, and now currently the President
          of Texas Rotaract, a non-profit organization serving under the
          standards of the Rotary International Club. Our organization has
          developed a welcoming space for a diverse group of students to serve
          Austin’s local community in any way possible including trash pickups,
          garden restorations, food deliveries, school events, and much more.
          Along with school-related activities, I also practice Brazilian
          jiu-jitsu and dabble in photography; Coming from a wrestling
          background, jiu-jitsu has been a great way for me to continue
          practicing martial arts and stay active during University, while
          photography allows me the opportunity to express my creativity through
          a lens of a camera and share the images on my social media.
        </p>
      </div>
    </section>
    <section class="content-container-row">
      <div class="image-container--row">
        <img
          class="image-row"
          :src="require('../assets/imgs/family.jpg')"
          alt="faimily photo"
        />
      </div>
      <div class="p-content-container--row">
        <p id="p-content-description" class="">
          I am currently scheduled to graduate in May of 2021 with a Bachelors
          in Economics and May of 2022 with a Masters in Science of Information
          Technology Management.
        </p>
      </div>
    </section>
  </body>
</template>
<script>
import M from "materialize-css";
import TheNav from "@/components/TheNav.vue";
export default {
  data() {
    return {};
  },
  components: {
    TheNav,
  },
  mounted() {
    M.AutoInit();
  },
  computed: {},
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
h5 {
  font-weight: 600;
}

.header--sub-header {
  font-style: italic;
  font-weight: 100;
  margin-block: 0.5rem;
}

.content-container-col {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  width: min(90%, 70.5rem);
}

.content-container-row {
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  margin-inline: auto;
  width: min(90%, 70.5rem);
  padding-block: 4rem;
}

.p-content-container--row {
  margin-left: 2rem;
}

@media (max-width: 50em) {
  .content-container-row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 2em;
  }
  .content-container-col {
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    width: min(70%, 60rem);
  }
  .content-container-row {
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
    margin-inline: auto;
    width: min(70%,60rem);
    padding-block: 4rem;
  }
  .p-content-container--row {
    margin-block: 2rem;
  }
}

.image-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.image-container--row {
  display: flex;
}

.image-spacer {
  height: 100%;
  width: 450px;
}

.image-row {
  height: 100%;
  width: 350px;
}
</style>
