<template>
  <v-row justify="center" align="center" class="full-height background-cover" >
    <v-col cols="12">
      <h1 class="text-center white--text app-title">DIVER APP</h1>
      <p class="text-center white--text">No vuelvas a perder ninguna inmersión</p>
      <p class="text-center mt-10">
        <v-btn class="mx-auto" color="warning" elevation="2" @click.native="goLogin"> ENTRAR</v-btn>
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "landing",
  auth: "guest",
  methods: {
    goLogin () {
      this.$router.push('/login')
    }
  },
}
</script>

<style scoped>
  .background-cover {
    background-image: url(~assets/landpage.png);
    background-size: cover;
    background-position-x: center;
  }
  .app-title {
    font-size: 3em;
  }
</style>
