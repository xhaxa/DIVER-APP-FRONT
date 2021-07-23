<template>
  <v-app >
    <v-main class="background">
      <v-container fluid class="full-height " pa-0>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
.full-height {
  height: 100vh;
  background-color: #212121;
}
.background {
  background-color: black;
}
</style>
