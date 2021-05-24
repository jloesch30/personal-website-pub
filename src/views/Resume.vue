<template>
  <div>
    <the-nav></the-nav>
  </div>
  <body>
    <section>
      <div class="container">
        <div class="flex">
          <div>
            <h4>Resume</h4>
          </div>
          <div>
            <p>
              To view my resume, click the button below to be redirected to a
              PDF version.
            </p>
          </div>
          <div>
            <a
              class="waves-effect waves-light btn blue lighten-3"
              @click="redirectResume(resumeLink)"
              >Link</a
            >
          </div>
        </div>
        <div class="container--image"></div>
      </div>
    </section>
  </body>
</template>

<script>
import TheNav from "../components/TheNav.vue";
export default {
  data() {
    return {
      resumeLink:
        "https://drive.google.com/file/d/1wJupk0BGrQYLxanEbre5NK3F9tWZASpK/view?usp=sharing",
    };
  },
  components: { TheNav },
  methods: {
    redirectResume(loc) {
      const win = window.open(loc, "_blank");
      win.focus();
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  margin: 1rem 0;
}

.container {
  margin-inline: auto;
  width: min(95%, 70.5rem);
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>