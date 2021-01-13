<template>
  <body>
    <div>
      <the-nav></the-nav>
    </div>
    <main>
      <div class="divider"></div>
      <div class="section">
        <div class="row">
          <div class="col s6">
            <img
              class="responsive-img"
              src="../assets/svg/vuejs.svg"
              alt="vue"
            />
          </div>
          <div class="col s6 sec-1">
            <h4>Intro</h4>
            <p >
              Hello and welcome to my personal website. I hope you find the
              material found of this page informative and usful to learn more
              about me.
            </p>
          </div>
        </div>
      </div>
      <div class="divider"></div>
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
  display: block;
  height: auto;
  margin: 5rem;
  margin-left: 150px;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}
</style>

