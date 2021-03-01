<template>
  <div>
    <p class="alert">New cat page here... I guess.</p>
    <b-button @click="returnPage">Return</b-button>
  </div>
</template>

<script>
export default {
  name: "NewCat",
  methods: {
    returnPage() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
  justify-content: center;
}
.alert {
  margin: 0;
  margin-top: 0.5em;
}
</style>