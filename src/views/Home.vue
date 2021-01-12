<template>
  <body>
    <div>
      <the-nav></the-nav>
    </div>
    <div class="row">
      <div class="col s12 m9 l10">
        <div id="introduction" class="section scrollspy">
          <p>Content</p>
        </div>

        <div id="structure" class="section scrollspy">
          <p>Content</p>
        </div>

        <div id="initialization" class="section scrollspy">
          <p>Content</p>
        </div>
      </div>
      <div class="col hide-on-small-only m3 l2">
        <ul class="section table-of-contents">
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#structure">Structure</a></li>
          <li><a href="#initialization">Intialization</a></li>
        </ul>
      </div>
    </div>
    <div class="bottom-footer">
      <the-footer></the-footer>
    </div>
  </body>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheNav from "@/components/TheNav.vue";
import M from "materialize-css";
export default {
  components: {
    TheFooter,
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

