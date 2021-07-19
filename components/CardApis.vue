<template>
  <v-card
    max-width="100%"
  >
    <v-img
      class="white--text align-end"
      height="80px"
      :src="prop.src"
    >   
    <v-card-title class="shadow">{{ prop.title }}</v-card-title>
    </v-img>  
  </v-card>

</template>

<script>
  export default {
    name: "CardApis",
    props: {
      prop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style >
.shadow {
  text-shadow: black 0.1em 0.1em 0.3em
}

</style>