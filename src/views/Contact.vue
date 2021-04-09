<template>
  <div id="contact">
    <b-form @submit.prevent="sendEmail" v-if="show">
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          name="from_name"
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          name="from_email"
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Message:" label-for="input-3">
        <b-form-textarea
          name="message_html"
          id="textarea-no-resize"
          v-model="form.message"
          required
          placeholder="Enter message"
          rows="10"
          no-resize
        >
        </b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="secondary"> Submit </b-button>
    </b-form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
      },
      show: true,
    };
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          process.env.VUE_APP_EMAILJS_SERVICE,
          process.env.VUE_APP_EMAILJS_TEMPLATE,
          e.target,
          process.env.VUE_APP_EMAILJS_USER
        )
        .then(
          (result) => {
            this.$bvToast.toast("You sent a message", {
              title: "Success",
              variant: "success",
              autoHideDelay: 5000,
              appendToast: false,
            });
          },
          (error) => {
            this.$bvToast.toast(
              `Sorry. Failed to send your message because ${result.text}`,
              {
                title: `${result.status} Error`,
                variant: "danger",
                autoHideDelay: 5000,
                appendToast: false,
              }
            );
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
#contact {
  margin: 50px auto;
  height: 100%;
}
</style>
