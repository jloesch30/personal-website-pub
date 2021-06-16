<template>
  <body>
    <section>
      <div class="container">
        <h2>Work in progress</h2>
        <div class="content-header">
          <h2>LSTM Lite-coin</h2>
          <h5>Data science</h5>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="container--page-content">
          <div>
            <p>
              Hello and welcome to this blog segment covering a small
              exploratory project using a real world application of <span class="bold">Neural
              Networks</span>. More specifically, the method we will be using is a
              variation of a Recurrent Neural Network called <span class="bold">LSTM</span> ( Long-short
              term memory). This blog will be separated in two major sections;
              The first being an explanation as to why I chose the data and
              model and my goals in completing this exercise. While the second
              will be an in depth walkthrough of how the experiment was sought
              out. Let’s begin!
            </p>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
export default {
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

h1,
h2,
h3,
h4,
h5 {
  text-align: center;
}

p {
  line-height: 2em;
}

.bold {font-weight: bold;}

.container {
  margin-inline: auto;
  width: min(95%, 70.5rem);
}

.container--page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>