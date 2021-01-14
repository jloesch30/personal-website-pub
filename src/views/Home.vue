<template>
  <body>
    <div>
      <the-nav></the-nav>
    </div>
    <main>
      <div class="section">
        <div class="row container">
          <div class="col s12 l4 m6">
            <img
              id="vue-img"
              class="responsive-img"
              src="../assets/svg/vuejs.svg"
              alt="vue"
            />
          </div>
          <div class="col s12 l8 m6">
            <h4 class="header">Intro</h4>
            <p>
              Hello and welcome to my personal website. I hope you find the
              material found of this page informative and usful to learn more
              about me. To begin, I wanted to speak on the website and the
              methods used to build this portfolio
            </p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="row container">
          <div class="col s12 l8 m6">
            <h4 class="header">Intro</h4>
            <p>
              Hello and welcome to my personal website. I hope you find the
              material found of this page informative and usful to learn more
              about me. To begin, I wanted to speak on the website and the
              methods used to build this portfolio
            </p>
          </div>
          <div class="col s12 l4 m6">
            <img
              id="vue-img"
              class="responsive-img"
              src="../assets/svg/vuejs.svg"
              alt="vue"
            />
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
import M from "materialize-css";
export default {
  components: {
    TheNav,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
img {
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  margin-top: 3rem;
}
h4.header {
  font-weight: bold;
}
</style>

