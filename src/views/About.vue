<template>
  <div>
    <the-nav></the-nav>
  </div>
  <section class="container heading">
    <div class="seperator"></div>
    <div class="row">
      <h4 class="header">About Me</h4>
    </div>
    <div>
      <h5 class="under-header">Quote or saying here</h5>
    </div>
  </section>
  <section class="container section-1">
    <p id="paragraph">
      I am currently a senior at the University of Texas at Austin pursuing a
      bachelors in Economics and a Masters of Science in Information Technology
      Management. Both my bachelors and masters degree have been a great asset
      to me in saturating my passions through technology, business, and
      mathematics while gaining valuable experience solving real world problems.
      Throughout my college education, I have gained a foundational
      understanding in both quantitative and qualitative points of views,
      allowing me to think abstractly when developing solutions.
    </p>
    <div class="row">
      <div class="col l12 center">
        <img
          class="title-photo"
          src="../assets/imgs/mccombs.png"
          alt="ut-austin"
        />
      </div>
    </div>
    <div class="content">
      <p id="paragraph">
        While attending UT I have had the privilege to serve as the Fundraising
        officer, Vice President, and now currently the President of Texas
        Rotaract, a non-profit organization serving under the standards of the
        Rotary International Club. Our organization has developed a welcoming
        space for a diverse group of students to serve Austin’s local community
        in any way possible including trash pickups, garden restorations, food
        deliveries, school events, and much more. Along with school related
        activities, I also practice brazillian jiu jitsu; Coming from a
        wrestling background jiu jitsu has been a great way for me to continue
        practicing martial arts and stay active during University.
      </p>
    </div>
  </section>
  <div class="seperator"></div>
  <section class="section-2">
    <div class="row">
      <div class="col m1 center-align">
        <img
          class="section-2-image responsive-img"
          :src="require('../assets/imgs/family.jpg')"
          alt="lake photo"
        />
      </div>
      <div class="col m11 left-align">
        <p id="paragraph" class="section-2-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          possimus, aliquam aperiam voluptas vero facilis fugit laboriosam illum
          inventore omnis, saepe at quas iusto, est fugiat sequi neque itaque
          voluptates.
        </p>
      </div>
    </div>
  </section>
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
img.title-photo {
  width: 60%;
  height: auto;
}
img.section-2-image {
  margin: 2rem;
  max-height: 500px;
}
.section-2 {
  background-color: rgb(244, 244, 244);
}
.slide-show {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.carousel-item {
  height: 32rem;
  background: #777;
}
.seperator {
  margin: 4rem;
}
.header {
  font-weight: bold;
  font-family: "Merriweather", serif;
}
.table-of-contents {
  position: fixed;
}
.under-header {
  color: rgb(61, 138, 186);
}
#paragraph {
  font-size: 16px;
  font-family: "Montserrat", serif;
}
#paragraph.section-2-p {
  margin: 2rem;
}
</style>
