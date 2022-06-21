<template>
  <form @submit.prevent="stopPrevent()">
    <input v-model="inpValue" type="text" maxlength="24" />
    <button type="submit">{{ btn }}</button>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    btn: {
      type: String,
    },
  },
  data() {
    return {
      inpValue: null,
    };
  },
  methods: {
    stopPrevent() {
      this.$emit("submitForm", this.inpValue);
    },
  },
};
</script>

<style scoped></style>
