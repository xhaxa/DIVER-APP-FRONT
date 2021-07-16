<template>
  <v-card
    class="ma-8"
    max-width="100%"
    color="primary"
  >
    <v-row> 
      <v-col>
      <!-- <v-img
        class="white--text align-end"
        height="80px"
        :src="imagesProp.src || '/avatar.png'"
      > 
      </v-img>  -->

        <v-card-title>AÑADIR NUEVA INMERSIÓN </v-card-title>
        
  
        <v-card-actions class="">
          
          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdc-fab--mini' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>


      </v-col>
    </v-row>
  </v-card>

</template>

<script>
  export default {
    name: "CardLogbookNew",
    // props: {
    //   imagesProp: Object,
    // },
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>