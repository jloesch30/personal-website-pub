<template>
  <section class="input-field">
    <div class="row container">
      <form class="col s12" @submit.prevent="sendEmail">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="first_name"
              type="text"
              class="validate"
              name="fname"
              v-model="fname"
            />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input
              id="last_name"
              type="text"
              class="validate"
              name="lname"
              v-model="lname"
            />
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea
              id="content"
              type="text"
              class="validate materialize-textarea"
              name="content"
              v-model="content"
            />
            <label for="content">Content</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              class="validate"
              name="email"
              v-model="email"
            />
            <label for="email">Email</label>
            <span class="helper-text" data-error="invalid email" data-success=""></span>
          </div>
        </div>
        <!-- <input type="submit" value="send" /> -->
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import M from "materialize-css";
import emailjs from "emailjs-com";
export default {
  name: "ContactMe",
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      content: "",
      key: process.env.VUE_APP_SERVICE_ID,
    };
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    sendEmail(e) {
      // check if content was filled
      if (e.target.fname.value && e.target.lname.value && e.target.content.value) {
        emailjs
          .sendForm(
            process.env.VUE_APP_SERVICE_ID,
            process.env.VUE_APP_TEMPLATE_ID,
            e.target,
            process.env.VUE_APP_EMAIL_U_ID
          )
          .then(
            (result) => {
              console.log("SUCCESS", result.status, result.text);
              this.$emit('form-success'); // emit custom prop
            },
            (error) => {
              console.log("FAILED...", error);
              this.$emit('form-fail');
            }
          );
      } else {
        this.$emit('form-fail');
      }
      this.fname = '';
      this.lname = '';
      this.content = '';
      this.email = '';
    },
  },
};
</script>

<style scoped>
</style>