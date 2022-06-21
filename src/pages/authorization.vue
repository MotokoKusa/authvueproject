<template>
  <div class="home">
    <h2>{{ title }}</h2>
    <p v-if="error.fail">{{ error.text }}</p>
    <AuthForm @submitForm="loginAuth" :btn="btn" />
  </div>
</template>

<script>
import AuthForm from "@/components/authForm";
import getAnalytics from "@/api/getAnalytics";
import router from "@/router";

export default {
  name: "AuthorizationPage",
  components: { AuthForm },
  data() {
    return {
      title: "LeadHit",
      btn: "Войти",
      error: {
        text: "id сайта должен содержать 24 символа",
        fail: false,
      },
    };
  },
  methods: {
    async loginAuth(id) {
      if (id && id.length === 24) {
        this.error.fail = false;
        let response = await getAnalytics(id);
        if (response === "ok") {
          localStorage.setItem("token", `${id}`);
          await router.push({ path: "/analytics", name: "analytics" });
        }
      } else {
        this.error.fail = true;
      }
    },
  },
};
</script>
