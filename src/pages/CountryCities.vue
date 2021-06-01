<template>
  <div>
    <h1>
      {{ countryName }}
    </h1>
    <div v-if="cities">
      <ul>
        <div v-for="city in cities" :key="city.Name">
          <li>
            <router-link :to="`/city/${city.Name}`">{{
              city.Name
            }}</router-link>
          </li>
        </div>
      </ul>
    </div>
    <div v-else>{{ country }}の街が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "City",
  props: {
    countryName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const country = props.countryName;
    const cities = ref();
    onMounted(async () => {
      const res = await axios.get(
        "/api/country/" + props.countryName + "/cities"
      );
      cities.value = res.data;
    });
    return { cities, country };
  },
};
</script>
