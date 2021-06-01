<template>
  <ul>
    <div v-for="country in countries" :key="country.Name">
      <li>
        <router-link :to="`/country/${country.Name}`">{{
          country.Name
        }}</router-link>
      </li>
    </div>
  </ul>
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
