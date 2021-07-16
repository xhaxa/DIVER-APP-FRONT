<template>
  <v-card
    class="ma-8"
    max-width="100%"
    color="primary"
  >
    <v-row> 
      <v-col>
        <pre>
          {{ logbook }}
        </pre>
      <!-- <v-img
        class="white--text align-end"
        height="80px"
        :src="imagesProp.src || '/avatar.png'"
      > 
      </v-img>  -->

        <v-card-title>Inmersión </v-card-title>
        
  
        <v-card-actions class="">
          <v-card-subtitle>30 metros</v-card-subtitle>
          <v-card-subtitle>45 minutos</v-card-subtitle>
          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be 
            </v-card-text>
          </div>
        </v-expand-transition>

      </v-col>
    </v-row>
  </v-card>

</template>

<script>
  export default {
    name: "CardLogbook",
    props: {
      logbook: Object,
    },
    data() {
      return {
        show: false,
      }
    },
  }
</script>