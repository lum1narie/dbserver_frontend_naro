<template>
  <div>
    <button @click="sendGet">GET</button>
    <button @click="sendPost">POST</button>
    <button @click="sendPut">PUT</button>
    <button @click="sendDelete">DELETE</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Axios",
  setup() {
    const url = "https://engufr6lewbpr28.m.pipedream.net";
    const sendGet = () => axios.get(url);
    const sendPost = () =>
      axios.post(url, {
        traQID: "lum1narie",
        grade: 20,
      });
    const sendPut = () =>
      axios.put(url, {
        testData: { string: "string", number: 1 },
      });
    const sendDelete = () =>
      axios.delete(url, {
        data: { po: 1 },
      });
    return {
      sendGet,
      sendPost,
      sendPut,
      sendDelete,
    };
  },
};
</script>
