<template>
  <div>
    <the-nav></the-nav>
  </div>
  <section class="card-content">
    <div class="row">
      <div class="col s4 card-container">
        <card-base
          :image_url="'code.png'"
          :card_content="'Vue.js applciation'"
          :git_url="'https://github.com/jloesch30/personal-website'"
        ></card-base>
      </div>
      <div class="col s8">
        <h3 class="header-right">Vue + Materialize</h3>
        <p class="content-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem
          asperiores nam ipsum possimus, ab, iusto quos consequuasdfum sequi
          aspernatur fuga.
        </p>
      </div>
    </div>
  </section>
  <section class="card-content-grey">
    <div class="row">
      <div class="col s8">
        <h3 class="header-left">Vue + Materialize</h3>
        <p class="content-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem
          asperiores nam ipsum possimus, ab, iusto quos consequuntur reiciendis
          nihil libero, minus laborum eligendi vero dolor laudantium sequi
          aspernatur fuga.
        </p>
      </div>
      <div class="col s4 card-container">
        <card-base
          :image_url="'code.png'"
          :card_content="'Vue.js applciation'"
          :git_url="'https://github.com/jloesch30/personal-website'"
        ></card-base>
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
p.content-right {
  margin-right: 2rem;
}
p.content-left {
  margin-left: 2rem;
}
.header-right,
.header-left {
  margin-top: 3rem;
}
.header-left {
  margin-left: 2rem;
}
.card-content-grey {
  background-color: rgb(244, 244, 244);
}
</style>