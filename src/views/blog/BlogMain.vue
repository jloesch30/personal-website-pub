<template>
  <the-nav></the-nav>
  <body v-if="blogBase">
    <div class="container">
      <h2>Available blogs</h2>
    </div>
  </body>
  <body v-else>
    <router-view></router-view>
  </body>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
export default {
  mounted() {
    if (this.$route.path === `${this.baseUrl}/blog` || this.$route.path === `${this.baseUrl}/blog/`) {
      this.blogBase = true;
    } else {
      this.blogBase = false;
    }
  },
  components: {
    TheNav,
  },
  data() {
    return {
      blogBase: true,
      baseUrl: "/personal-website"
    };
  },
};
</script>

<style>
</style>