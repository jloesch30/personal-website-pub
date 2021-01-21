<template>
  <div>
    <the-nav></the-nav>
  </div>
  <section class="card-content">
    <div class="row">
      <div class="col s4 card-container">
        <card-base></card-base>
      </div>
      <div class="col s8">
        <h3 class="header">Vue + Materialize</h3>
        <p class="content-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem
          asperiores nam ipsum possimus, ab, iusto quos consequuntur reiciendis
          nihil libero, minus laborum eligendi vero dolor laudantium sequi
          aspernatur fuga.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
import CardBase from "../components/projects/CardBase.vue";
export default {
  components: {
    TheNav,
    CardBase,
  },
};
</script>

<style scoped>
h3 {
  margin-top: 0;
  color: rgb(61, 138, 186);
}
p.content-1{
margin-right: 2rem;
}
.header {
  margin-top: 3rem;
}
</style>