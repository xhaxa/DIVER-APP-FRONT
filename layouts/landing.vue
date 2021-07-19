<template>
  <v-app >

    <v-main>
      <v-container pa-0>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      dark
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  
}
</script>