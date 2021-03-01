<template>
  <div id="home" class="row">
    <p v-if="!cats.length">Nothing to show, YET.</p>
    <b-card
      title="Some title"
      v-else
      v-for="(cat, index) in cats"
      :key="index"
      :img-src="cats[index].url"
      :img-alt="'Cat Image'"
      class="mb-2 col-sm-4 col-md-3 col-lg-4 col-xl-2 cat-card"
      style="max-width: 20rem"
    >
      <b-card-text>Some text description here.</b-card-text>
      <b-button @click="newCatPage">It's a button, click me?</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { fetchCats } from "./../services/theCatApi";
export default {
  name: "Home",
  methods: {
    ...mapActions({
      updateCats: "cats/updateCats"
    }),
    async fetchCatsImages() {
      const catsImages = await fetchCats({ limit: 15, size: "full" });
      this.updateCats(catsImages);
    },
    newCatPage() {
      this.$router.push({ name: "NewCat" });
    }
  },
  async created() {
    await this.fetchCatsImages();
  },
  computed: {
    ...mapGetters({
      cats: "cats/getCats"
    })
  }
};
</script>

<style scoped>
#home {
  justify-content: center;
}
.cat-card {
  margin: 0.5em;
}
</style>
