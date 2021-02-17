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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse impedit
      aliquid omnis quidem quod, maiores dolor modi ex eius, harum architecto
      laboriosam distinctio doloremque necessitatibus itaque? Quisquam, ea
      magnam?
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse
        impedit aliquid omnis quidem quod, maiores dolor modi ex eius, harum
        architecto laboriosam distinctio doloremque necessitatibus itaque?
        Quisquam, ea magnam?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Enim esse impedit aliquid omnis quidem quod, maiores dolor modi ex
        eius, harum architecto laboriosam distinctio doloremque necessitatibus
        itaque? Quisquam, ea magnam?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim esse impedit aliquid omnis quidem quod, maiores
        dolor modi ex eius, harum architecto laboriosam distinctio doloremque
        necessitatibus itaque? Quisquam, ea magnam?
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
