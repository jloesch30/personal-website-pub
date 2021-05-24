<template>
  <body>
    <div class="bg flex-container">
      <div class="seperator"></div>
      <div class="content--image">
        <div class="img-container">
          <img
            class="headshot-image"
            :src="require('@/assets/imgs/head-shot.jpg')"
            alt="head shot"
          />
        </div>
      </div>
      <div class="content--description">
        <h3 class="name-plate">Joshua Loesch</h3>
        <p class="paragraph">
          Technology enthusiast, Programmer & Student
        </p>
      </div>
      <div class="down-indication"></div>
    </div>
    <div class="footer">
      <the-footer></the-footer>
    </div>
  </body>
</template>

<script>
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheFooter,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* - util - */
.seperator {
  margin: 2rem 0;
}
/* -------- */

.flex-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-shrink: 1;
}

.img-container {
  width: 200px;
}

.content--description {
  text-align: center;
  margin-inline: auto;
  width: min(50%);
}

.name-plate {
  font-size: 35px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.paragraph {
  color: var(--clr-primary-white);
  font-size: 14px;
}

@media (min-width: 50em) {
  .paragraph {
    font-size: 18px;
  }
  .seperator {
    margin: 4rem 0;
  }
  .name-plate {
    font-size: 40px;
  }
}

.headshot-image {
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 50%;
  filter: drop-shadow(0 0 0.75rem grey);
}

.bg {
  background-image: url(../assets/imgs/landing-back3.png);
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;
}

.down-indication::before {
  animation: bounce 1s ease infinite;
  bottom: 2rem;
  color: #fff;
  content: "╲╱";
  font-size: 1rem;
  height: 2rem;
  left: 50%;
  letter-spacing: -1px;
  line-height: 4rem;
  margin-left: -3rem;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  width: 6rem;
}

@keyframes bounce {
  50% {
    transform: translateY(-20%);
  }
}
</style>