<template>
  <div>
    <the-nav></the-nav>
  </div>
  <body>
    <section>
      <div class="container">
        <div class="split">
          <div class="container--card">
            <card-base
              :image_url="'code.png'"
              :card_content="'Vue.js applciation'"
              :git_url="'https://github.com/jloesch30/personal-website'"
            ></card-base>
          </div>
          <div>
            <div class="container--narrow">
              <h3>Vue + Materialize CSS</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              autem asperiores nam ipsum possimus, ab, iusto quos consequuasdfum
              sequi aspernatur fuga.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="split split--inverse">
          <div>
            <div class="container--narrow">
              <h3>Discord Bot + Webscraping + Yahoo Finance</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              autem asperiores nam ipsum possimus, ab, iusto quos consequuntur
              reiciendis nihil libero, minus laborum eligendi vero dolor
              laudantium sequi aspernatur fuga.
            </p>
          </div>
          <div  class="container--card">
            <card-base
              :image_url="'discord_icon.png'"
              :card_content="'Discord Finance Bot'"
              :git_url="'https://github.com/jloesch30/stock-bot'"
            ></card-base>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="split">
          <div class="container--card">
            <card-base
              :image_url="'portal_game.png'"
              :card_content="'Processing Java Game '"
              :git_url="'https://github.com/jloesch30/cs324e_final_project/tree/v2.0'"
            ></card-base>
          </div>
          <div class="card-description">
            <div class="container--narrow">
              <h3>Java + Processing Final Project</h3>
            </div>
            <p>
              This game was completed for a final project for cs324e (Graphics
              and Visualization) at the University of Texas. This game is a
              mimic of the famous game "Portal" from the publisher Valve. It has
              a series of 8-bit classic mechanics such as collision detection,
              movement keys, physics simulations such as gravity, and
              teleportation.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="split split--inverse">
          <div>
            <div class="container--narrow">
              <h3>Econometrics Research Paper</h3>
            </div>
            <p>
              The paper uses emperical methods to evaluate internet usage as a
              factor of domestic suicides. Using multi-variable regression, the
              paper uses reviewed litterature and emperical statistics to
              explore the topic.
            </p>
          </div>
          <div class="container--card">
            <card-base
              :image_url="'econ-paper.png'"
              :card_content="'Emperical research paper'"
              :git_url="'https://github.com/jloesch30/econ-analysis/blob/main/final_draft_Joshua_Loesch.pdf'"
            ></card-base>
          </div>
        </div>
      </div>
    </section>
  </body>
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
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  line-height: 1;
  margin-bottom: 0.5em;
}

h1,
h2,
h3 {
  text-align: center;
}

p {
  margin-bottom: 1em;
}

body > section {
  margin-bottom: 2rem;
}

.container {
  margin-inline: auto;
  width: min(95%, 70.5rem);
}

.container p {
  max-width: 60ch;
  margin-inline: auto;
}

.container--card {
  margin-top: -2.4rem;
  min-width: 15rem;
  max-width: 50rem;
  margin-inline: auto;
}

.container--narrow {
  max-width: 40rem;
  margin: 0 auto;
}

.split {
  display: flex;
  flex-direction: column;
}

.split--inverse {
  flex-direction: column-reverse;
}

@media (min-width: 50em) {
  .split {
    flex-direction: row;
  }
  .split > * {
    flex-basis: 100%;
  }
}

</style>