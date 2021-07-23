<template>
  <v-card
    max-width="100%"
  >
    <v-img
      class="white--text align-end"
      height="15vw"
      :src="prop.src"
      fluid
    >   
    <v-card-title  class="shadow text-h6 text-sm-h5 text-md-h4">{{ prop.title }}</v-card-title>
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
    }
  }
</script>

<style >
.shadow {
  text-shadow: black 0.1em 0.1em 0.3em
}

</style>