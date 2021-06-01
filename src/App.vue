<template>
  <div id="app" :class="$style.container">
    <div id="nav" :class="$style.header">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/city/Tokyo">Tokyo</router-link> |
      <router-link to="/countries">Countries</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<style module>
.container {
  max-width: fit-content;
  margin: auto;
}
.header {
  display: flex;
  justify-content: center;
}
</style>
