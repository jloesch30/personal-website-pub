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
  <section>
    <div class="seperator"></div>
    <the-image-row
    :images="images"/>
  </section>
</template>
<script>
import M from "materialize-css";
import TheNav from "@/components/TheNav.vue";
import TheImageRow from "@/components/TheImageRow.vue";
export default {
  data() {
    return {};
  },
  components: {
    TheNav,
    TheImageRow
  },
  mounted() {
    M.AutoInit();
  },
  computed: {
    images() {
      return {
        i1: "friends.jpg",
        i2: "milk.jpg",
        i3: "lake-1.jpg",
        i4: "milk-1.jpg"
      };
    }
  }
};
</script>

<style scoped>
img {
  width: 80%;
  height: auto;
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
