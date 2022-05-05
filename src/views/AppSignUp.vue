<template>
  <div class="row justify-content-center h-100">
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

        <b-form-group :label="$t('menu.email')" label-for="email">
          <b-form-input
            id="email"
            v-model="form.email"
            type="text"
            :placeholder="$t('menu.enterEmail')"
            :state="form.validationEmail"
          ></b-form-input>
          <b-form-invalid-feedback :state="form.validationEmail">
            {{ $t("menu.errorMessageEmail") }}
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
        email: "",
        login: "",
        password: "",
        validationEmail: null,
        validationPassword: null,
        validationLogin: null,
      },
    };
  },
  methods: {
    validateEmail() {
      if (
        this.form.email === "" ||
        !/^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/.test(this.form.email)
      ) {
        this.form.validationEmail = false;
      } else if (this.form.email.length >= 4) {
        this.form.validationEmail = true;
      }
      return this.form.validationEmail;
    },
    validateLogin() {
      if (
        this.form.login === "" ||
        !/^[a-z0-9_-]{3,16}$/.test(this.form.login)
      ) {
        this.form.validationLogin = false;
      } else if (this.form.login.length >= 3) {
        this.form.validationLogin = true;
      }
      return this.form.validationLogin;
    },
    validatePassword() {
      if (
        this.form.password === "" ||
        !/^[a-z0-9_-]{6,18}$/.test(this.form.password)
      ) {
        this.form.validationPassword = false;
      } else if (this.form.password.length >= 6) {
        this.form.validationPassword = true;
      }

      return this.form.validationPassword;
    },
    onSubmit(event) {
      event.preventDefault();
      if (
        this.validateEmail() &
        this.validateLogin() &
        this.validatePassword()
      ) {
        this.$store
          .dispatch(actionTypes.signUpCurrentUser, {
            login: this.form.login,
            password: this.form.login,
            email: this.form.email,
          })
          .then(() => {
            this.$router.push({ name: "home" });
          });
      }
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.login = "";
      this.form.password = "";
      this.form.validationEmail = null;
      this.form.validationLogin = null;
      this.form.validationPassword = null;
    },
  },
});
</script>
