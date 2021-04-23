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
          :git_url="'https://github.com/jloesch30/stock-bot'"
        ></card-base>
      </div>
    </div>
  </section>
  <section class="card-and-content">
    <div class="row container">
      <div class="card-content col s12 m6 l4">
        <card-base
          class="card-base"
          :image_url="'portal_game.png'"
          :card_content="'Processing Java Game '"
          :git_url="'https://github.com/jloesch30/cs324e_final_project/tree/v2.0'"
        ></card-base>
      </div>
      <div class="card-content col s12 m6 l8">
        <h3 style="margin-top: 2rem">Java + Processing Final Project</h3>
        <p class="">
          This game was completed for a final project for cs324e (Graphics and
          Visualization) at the University of Texas. This game is a mimic of the
          famous game "Portal" from the publisher Valve. It has a series of
          8-bit classic mechanics such as collision detection, movement keys,
          physics simulations such as gravity, and teleportation.
        </p>
      </div>
    </div>
  </section>
  <section class="card-and-content">
    <div class="row container">
      <div class="card-content col s12 m6 l8">
        <h3 style="margin-top: 2rem">Econometrics Research Paper</h3>
        <p class="">
          The paper uses emperical methods to evaluate internet usage as a
          factor of domestic suicides. Using multi-variable regression, the
          paper uses reviewed litterature and emperical statistics to explore
          the topic.
        </p>
      </div>
      <div class="card-content col s12 m6 l4">
        <card-base
          class="card-base"
          :image_url="'econ-paper.png'"
          :card_content="'Emperical research paper'"
          :git_url="'https://github.com/jloesch30/econ-analysis/blob/main/final_draft_Joshua_Loesch.pdf'"
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
  color: rgb(61, 138, 186);
}
.card-content-grey {
  background-color: rgb(255, 255, 255);
}
</style>