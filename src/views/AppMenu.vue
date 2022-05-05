<template>
  <b-navbar toggleable="md" fixed="top" type="dark" variant="info ">
    <b-navbar-brand :to="{ name: 'home' }"
      ><b-icon icon="back" font-scale="1.2"></b-icon>
      {{ $t("menu.brand") }}</b-navbar-brand
    >
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'about' }">{{ $t("menu.about") }}</b-nav-item>
      <b-nav-item :to="{ name: 'todoList' }">{{
        $t("menu.todoList")
      }}</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item
          v-for="(language, i) in languages"
          :key="`language${i}`"
          :value="language"
          @click="handleChangeLang(language)"
        >
          {{ language }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item right :to="{ name: 'signUp' }">{{
        $t("menu.signUp")
      }}</b-nav-item>
      <b-nav-item right :to="{ name: 'signIn' }">{{
        $t("menu.signIn")
      }}</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import * as locale from "@/main";
import { actionTypes, IModuleMenuState } from "@/store/modules/menu";
import { mapState } from "vuex";

export default Vue.extend({
  name: "AppMenu",
  data() {
    return {
      languages: ["Ru", "En"],
    };
  },
  computed: {
    ...mapState({
      language: (state) => (state as IModuleMenuState).menu.language,
    }),
  },
  mounted: function () {
    this.$store.dispatch(actionTypes.getCurrentUser);
    locale.i18n.locale = this.language;
  },
  methods: {
    handleChangeLang: function (language: string) {
      this.$store.dispatch(actionTypes.changeLanguage, language);
      locale.i18n.locale = language;
    },
  },
});
</script>
