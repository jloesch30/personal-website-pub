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
              v-model="fname"
            />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input
              id="last_name"
              type="text"
              class="validate"
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
              v-model="content"
            />
            <label for="content">Content</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" v-model="email" />
            <label for="email">Email</label>
          </div>
        </div>
        <input type="submit" value="send">
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
      key: process.env.VUE_APP_SERVICE_ID
    };
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    sendEmail(e) {
      console.log('Sending email');
      console.dir(e);
      console.log(this.key);
      try {
        emailjs.sendForm(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          e.target,
          process.env.VUE_APP_EMAIL_U_ID,
          {
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            content: this.content,
          }
        );
      } catch (error) {
          console.log({error});
      }
      // reset form field
      this.fname = '';
      this.lname = '';
      this.email = '';
      this.content = '';
    },
  },
};
</script>

<style scoped>
</style>