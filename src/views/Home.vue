<template>
  <body>
    <div>
      <the-nav></the-nav>
    </div>
    <div class="row">
      <div>
        <div class="card-panel teal col s12 offset-l7">
          <span class="white-text"
            >I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively. I am similar to what is called a panel in other
            frameworks.
          </span>
        </div>
      </div>
    </div>
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
.bottom-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0px;
  width: 100%;
}
</style>

