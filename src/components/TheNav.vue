<template>
  <div class="navbar-fixed">
    <nav id="navbar">
      <div class="nav-wrapper">
        <router-link :to="landing" class="brand-logo"><img class="responsive-img resize circle z-depth-1" src="../assets/imgs/meSmall.jpeg"></router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <li><router-link :to="home" class="li-elem">Home</router-link></li>
          <li><router-link :to="about" class="li-elem">About</router-link></li>
          <li><router-link :to="projects" class="li-elem">Projects</router-link></li>
          <li><router-link :to="misc" class="li-elem">Miscellaneous</router-link></li>
          <li><router-link :to="contact" class="li-elem"><i class="material-icons">message</i></router-link></li>
        </ul>
      </div>
    </nav>
  </div>

  <ul class="sidenav" id="mobile-demo">
    <li><router-link :to="home">Home</router-link></li>
    <li><router-link :to="about">About</router-link></li>
    <li><router-link :to="projects">Projects</router-link></li>
    <li><router-link :to="misc">Miscellaneous</router-link></li>
    <li><router-link :to="contact">Contact</router-link></li>
  </ul>
</template>

<script>
import M from "materialize-css";
export default {
  data() {
    return {
      landing: {name: "Landing"},
      home: {name: "Home"},
      about: {name: "About"},
      projects: {name: "Projects"},
      misc: {name: "Miscellaneous"},
      contact: {name: "Contact"}
    };
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
a, u {
  text-decoration: none;
}
img {
  margin: 10px;
}
img.resize {
  margin-top: 3px;
  width: 50px;
  height: auto;
  object-fit: contain;
}
.navbar-fixed {
  margin-bottom: 2rem;
}

.li-elem {
  color: white;
}
#navbar {
  background-color: rgb(61, 138, 186);
}
#pic-me {
  color: black;
}
</style>