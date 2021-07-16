<template>
  <v-card
    class="mx-auto ma-5"
    max-width="100%"
    
  >
    <!-- <v-img
      class="white--text align-end"
      height="80px"
      :src="imagesProp.src || '/avatar.png'"
    > -->
      <v-img
        class="white--text align-end"
        height="80px"
        src="/avatar.png"
      >
    <v-card-title>Logbook</v-card-title>
    </v-img>  
  </v-card>

</template>

<script>
  export default {
    name: "CardApis",
    // props: {
    //   imagesProp: Object,
    // },
    data() {
      return {
        
      }
    },
  }
</script>