<template>
  <div>
    <footer id="footer" class="page-footer">
      <div class="container">
        <div class="row">
          <h6 class="white-text col s3 center-align">
            <router-link :to="home" class="hvr-float-shadow" id="click-link">Home</router-link>
          </h6>
          <h6 class="white-text col s3 center-align">
            <router-link :to="about" class="hvr-float-shadow" id="click-link">About</router-link>
          </h6>
          <h6 class="white-text col s3 center-align">
            <router-link class="hvr-float-shadow" id="click-link">Projects</router-link>
          </h6>
          <h6 class="white-text col s3 center-align">
            <router-link class="hvr-float-shadow" id="click-link">Resume</router-link>
          </h6>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021 Joshua Loesch
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: {name: },
      home: '/home',
      contact: '/contact',
      projects: '/projects'
    };
  }
};
</script>

<style scoped>
#click-link {
  cursor: pointer;
  color: rgba(34, 40, 39, 0.783);
}

#footer {
  background-color: rgba(0, 0, 0, 0.35);
}
/* Float Shadow */
.hvr-float-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-float-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: "";
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(
    center,
    ellipse,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
.hvr-float-shadow:hover,
.hvr-float-shadow:focus,
.hvr-float-shadow:active {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
.hvr-float-shadow:hover:before,
.hvr-float-shadow:focus:before,
.hvr-float-shadow:active:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}
</style>