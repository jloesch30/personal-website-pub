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
      Management with the McCombs School of Business. Both my bachelors and
      masters degree have been a great asset to me in saturating my passions
      through technology, business, and mathematics while gaining valuable
      experience solving real world problems. Throughout my college education, I
      have gained a foundational understanding in both quantitative and
      qualitative points of views, allowing me to think abstractly when
      developing solutions.
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
        Officer, Vice President, and now currently the President of Texas
        Rotaract, a non-profit organization serving under the standards of the
        Rotary International Club. Our organization has developed a welcoming
        space for a diverse group of students to serve Austin’s local community
        in any way possible including trash pickups, garden restorations, food
        deliveries, school events, and much more. Along with school-related
        activities, I also practice Brazilian jiu-jitsu and dabble in
        photography; Coming from a wrestling background, jiu-jitsu has been a
        great way for me to continue practicing martial arts and stay active
        during University, while photography allows me the opportunity to
        express my creativity through a lens of a camera and share the images on
        my social media.
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
          I am currently scheduled to graduate in May of 2021 with a Bachelors
          in Economics and May of 2022 with a Masters in Science of Information
          Technology Management.
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
  margin-left: -10px;
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
  font-family: "Merriweather", serif;
}
#paragraph.section-2-p {
  margin: 2rem;
}
</style>
