<template>
  <div>
    <the-nav></the-nav>
  </div>
  <section class="container">
    <div class="seperator"></div>
    <div class="row">
      <h4 class="header">About Me</h4>
    </div>
  </section>
  <section class="container">
    <div>
      <h5 class="under-header">Quote or saying here</h5>
    </div>
    <div class="content">
      <p id="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse
        impedit aliquid omnis quidem quod, maiores dolor modi ex eius, harum
        architecto laboriosam distinctio doloremque necessitatibus itaque?
        Quisquam, ea magnam?
      </p>
    </div>
  </section>
  <section>
    <div class="seperator"></div>
    <div class="row container">
      <div class="col l12 center">
        <img src="../assets/imgs/mccombs.png" alt="ut-austin" />
      </div>
      <div class="content">
        <p id="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse
          impedit aliquid omnis quidem quod, maiores dolor modi ex eius, harum
          architecto laboriosam distinctio doloremque necessitatibus itaque?
          Quisquam, ea magnam?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Enim esse impedit aliquid omnis quidem quod, maiores dolor modi
          ex eius, harum architecto laboriosam distinctio doloremque
          necessitatibus itaque? Quisquam, ea magnam?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Enim esse impedit aliquid omnis quidem
          quod, maiores dolor modi ex eius, harum architecto laboriosam
          distinctio doloremque necessitatibus itaque? Quisquam, ea magnam?
        </p>
      </div>
    </div>
  </section>
  <section class="slide-show">
    <the-slide-show :i1="image1" :i2="image2" :i3="image3"> </the-slide-show>
  </section>
  <section class="container">
    <div class="content">
      <p id="paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
        quidem, doloremque labore omnis porro, minus corrupti dignissimos
        quaerat, error iure qui vitae. Nisi incidunt ducimus similique vitae
        voluptates maxime provident!
      </p>
    </div>
  </section>
</template>
<script>
import M from "materialize-css";
import TheNav from "@/components/TheNav.vue";
import TheSlideShow from "@/components/TheSlideShow.vue";
export default {
  data() {
    return {
      image1: {
        id: 0,
        url: "lake.jpg",
        show: true,
      },
      image2: {
        id: 1,
        url: "milk.jpg",
        show: false,
      },
      image3: {
        id: 2,
        url: "vue.png",
        show: false,
      },
    };
  },
  components: {
    TheNav,
    TheSlideShow,
  },
  mounted() {
    M.AutoInit();
  },
  computed: {},
};
</script>

<style scoped>
img {
  width: 80%;
  height: auto;
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
</style>
