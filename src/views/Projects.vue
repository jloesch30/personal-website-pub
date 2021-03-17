<template>
  <div>
    <the-nav></the-nav>
  </div>
  <section class="card-and-content">
    <div class="row container">
      <div class="card-content col s12 m6 l4">
        <card-base
          class="card-base"
          :image_url="'code.png'"
          :card_content="'Vue.js applciation'"
          :git_url="'https://github.com/jloesch30/personal-website'"
        ></card-base>
      </div>
      <div class="card-content col s12 m6 l8">
        <h3 style="margin-top: 2rem">Vue + Materialize CSS</h3>
        <p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem
          asperiores nam ipsum possimus, ab, iusto quos consequuasdfum sequi
          aspernatur fuga.
        </p>
      </div>
    </div>
  </section>
  <section class="card-content-grey">
    <div class="row container">
      <div class="col s12 m6 l8">
        <h3 class="">Discord Bot + Webscraping + Yahoo Finance</h3>
        <p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem
          asperiores nam ipsum possimus, ab, iusto quos consequuntur reiciendis
          nihil libero, minus laborum eligendi vero dolor laudantium sequi
          aspernatur fuga.
        </p>
      </div>
      <div class="col s12 m6 l4 card-container">
        <card-base
          class="card-base"
          :image_url="'discord_icon.png'"
          :card_content="'Discord Finance Bot'"
          :git_url="'https://github.com/jloesch30/personal-website'"
        ></card-base>
      </div>
    </div>
  </section>
  <section class="card-and-content">
    <div class="row container">
      <div class="card-content col s12 m6 l4">
        <card-base
          class="card-base"
          :image_url="'code.png'"
          :card_content="'Vue.js applciation'"
          :git_url="'https://github.com/jloesch30/personal-website'"
        ></card-base>
      </div>
      <div class="card-content col s12 m6 l8">
        <h3 style="margin-top: 2rem">Vue + Materialize CSS</h3>
        <p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem
          asperiores nam ipsum possimus, ab, iusto quos consequuasdfum sequi
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
  color: rgb(61, 138, 186);
}
.card-content-grey {
  background-color: rgb(255, 255, 255);
}
</style>