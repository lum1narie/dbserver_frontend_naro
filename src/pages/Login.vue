<template>
  <div class="login">
    <h1>This is an login page</h1>
    <div>
      <table>
        <tr>
          <td>
            <label for="username"> ID </label>
          </td>
          <td>
            <input id="username" type="text" v-model="username" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="password"> password </label>
          </td>
          <td>
            <input id="password" type="password" v-model="password" />
          </td>
        </tr>

        <tr></tr>
      </table>
    </div>
    <div>
      <button @click="login">login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");

    const login = () =>
      axios.post("/api/login", {
        username: username.value,
        password: password.value,
      });

    return { username, password, login };
  },
};
</script>

<style></style>
