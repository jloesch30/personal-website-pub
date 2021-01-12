<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="personal-image col s6 offset-s7 center-align">
          <img
            class="z-depth-3"
            id="my-image"
            src="../assets/imgs/head.png"
            alt="placeholder"
          />
        </div>
        <div class="col s6 offset-s7 center-align" id="welcome-text">
          <h5>Welcome!</h5>
          <p>
            Please feel free to look around and explore my various intrests and
            projects.
          </p>
        </div>
      </div>
    </div>

    <div class="down-indication"></div>
    <div class="bottom-footer">
      <the-footer></the-footer>
    </div>
  </body>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';

export default {
  components: {
    TheFooter
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
body {
  background-image: url("..\\assets\\imgs\\laptop.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}

.nav-items {
  align-self: center;
}

.bottom-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0px;
  width: 100%;
}

.nav-items #load {
  margin-top: 10px;
}

.personal-image #my-image {
  width: 240px;
  border-radius: 50%;
  border: 2px solid black;
  margin-top: 10rem;
}

#welcome-text {
  margin-top: 0px;
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