<template>
  <h1>国一覧</h1>
  <div v-if="countries">
  <ul>
    <div v-for="country in countries" :key="country.Name">
      <li>
        <router-link :to="`/country/${country.Name}/cities`">{{
          country.Name
        }}</router-link>
      </li>
    </div>
  </ul>
  </div>
  <div v-else>国一覧が取得できませんでした</div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "Countries",
  setup() {
    const countries = ref();
    onMounted(async () => {
      const res = await axios.get("/api/countries");
      countries.value = res.data;
    });
    return { countries };
  },
};
</script>

<style></style>
