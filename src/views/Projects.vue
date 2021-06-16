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
              :url="'https://github.com/jloesch30/personal-website'"
              :blog="false"
            ></card-base>
          </div>
          <div>
            <div class="container--narrow">
              <h3>Vue 3 Personal Website</h3>
            </div>
            <p>
              This website was made in hopes to explore front end development
              and get more experience with relevant frameworks such as Vue &
              React. Vue 3 was officially launched in September of 2020, making
              it a fairly fresh version with an intuitive migration guide from
              the previous Vue 2. I chose Vue 3 due to the overall relevance of
              the framework and the limited compatible libraries available for
              the newer version; This allowed me to focus more on the core
              capabilities of Vue while also having to rely on my CSS skills to
              style the web page to my liking.
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
              This was a fun introduction to working with the Discord API in
              making server bots. I was inspired by the incredible hype
              revolving around investing and crypto and saw it as an opportunity
              to help my friends by putting together a financial aggregating
              bot. The bot mainly has two primary functions: One being to
              communicate with a open source clone of the Yahoo Finance API,
              while the other is to scrape the web for relevant news in regards
              to the targeted securities. When activated, a user can call on the
              bot from within a server and be recognized as a user via a
              collection stored in a MongoDB database; Once the user is
              recognized or has created an account, they can create, update, or
              delete information from their “watchlist” that can be queried for
              price information and relevant news. Check out the git repo for
              more information!
            </p>
          </div>
          <div class="container--card">
            <card-base
              :image_url="'discord_icon.png'"
              :card_content="'Discord Finance Bot'"
              :url="'https://github.com/jloesch30/stock-bot'"
              :blog="false"
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
              :url="'https://github.com/jloesch30/cs324e_final_project/tree/v2.0'"
              :blog="false"
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
              The paper uses empirical methods to evaluate internet usage as a
              factor of domestic suicides. Using multivariable regression, the
              paper utilizes reviewed literature and empirical statistics to
              explore the topic and report the findings in a research analysis
              fashion.
            </p>
          </div>
          <div class="container--card">
            <card-base
              :image_url="'econ-paper.png'"
              :card_content="'Emperical research paper'"
              :url="'https://github.com/jloesch30/econ-analysis/blob/main/final_draft_Joshua_Loesch.pdf'"
              :blog="false"
            ></card-base>
          </div>
        </div>
      </div>
    </section>
    <!-- <section>
      <div class="container">
        <div class="split">
          <div class="container--card">
            <card-base
              :image_url="'portal_game.png'"
              :card_content="'Processing Java Game '"
              :url="'lstm-lite'"
              :blog="true"
            ></card-base>
          </div>
          <div class="card-description">
            <div class="container--narrow">
              <h3>LSTM Litecoin</h3>
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
    </section> -->
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