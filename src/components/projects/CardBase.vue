<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-image">
        <img :src="require(`@/assets/imgs/projects/${image_url}`)" />
        <a class="btn-floating halfway-fab waves-effect waves-light red">
          <span class="git-icon">
            <i class="small material-icons" @click="changeDomain(url)">link</i>
          </span>
        </a>
      </div>
      <div class="card-content">
        <p>{{ card_content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base_url: "personal-website",
    };
  },
  props: {
    image_url: {
      type: String,
      required: true,
    },
    card_content: {
      type: String,
    },
    url: {
      type: String,
    },
    blog: {
      type: Boolean,
    },
  },
  methods: {
    changeDomain(loc) {
      if (this.blog) {
        this.$router.push(`/${this.base_url}/blog/` + loc);
      } else {
        const win = window.open(loc, "_blank");
        win.focus();
      }
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  margin: 3rem;
}
.git-icon {
  margin-left: 7.8px;
}
</style>