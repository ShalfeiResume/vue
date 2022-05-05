<template>
  <div class="row justify-content-center h-100 m-0">
    <div class="col-4 my-auto">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group :label="$t('menu.login')" label-for="login">
          <b-form-input
            id="login"
            v-model="form.login"
            type="text"
            :placeholder="$t('menu.enterLogin')"
            :state="form.validationLogin"
          ></b-form-input>
          <b-form-invalid-feedback :state="form.validationLogin">
            {{ $t("menu.errorMessageLogin") }}
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group :label="$t('menu.password')" label-for="password">
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            :placeholder="$t('menu.enterPassword')"
            :state="form.validationPassword"
          ></b-form-input>
          <b-form-invalid-feedback :state="form.validationPassword">
            {{ $t("menu.errorMessagePassword") }}
          </b-form-invalid-feedback>
        </b-form-group>

        <div class="row">
          <div class="col-3">
            <b-button type="submit" variant="outline-primary">{{
              $t("menu.submit")
            }}</b-button>
          </div>
          <div class="col-3">
            <b-button type="reset" variant="outline-primary">{{
              $t("menu.reset")
            }}</b-button>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { actionTypes } from "@/store/modules/menu";

export default Vue.extend({
  name: "AppSignUp",
  data() {
    return {
      form: {
        login: "",
        password: "",
        validationPassword: null,
        validationLogin: null,
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch(actionTypes.signInCurrentUser, {
        login: this.form.login,
        password: this.form.password,
      });
      // .then(() => {
      //   this.$router.push({ name: "home" });
      // });
    },
    onReset(event) {
      event.preventDefault();
      this.form.login = "";
      this.form.password = "";
    },
  },
});
</script>
