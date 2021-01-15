<template>
  <div>
    <the-nav></the-nav>
  </div>
  <section class="container">
    <div class="seperator"></div>
    <div class="row">
      <h4 class="header">About Josh</h4>
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
};
</script>

<style scoped>
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
  font-family: 'Montserrat', serif;
}
</style>