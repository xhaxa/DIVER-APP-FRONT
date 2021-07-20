<template>
  <v-card
    max-width="100%"
    color="primary"
    dark
  >
    <v-img
      gradient="90deg, rgba(190,102,245,1) 0%, rgba(0,226,217,1) 100%"
    >
     <pre>  
      {{ divelog }}
    </pre> 
      <v-card-actions> 
        <v-card-title>Inmersión {{ divelog.spot }} </v-card-title>
        <v-spacer></v-spacer>
         
        <v-icon class="mr-1"
        @click="deleteDive"

        >{{ 'mdi-delete-alert-outline' }}</v-icon>
          
      </v-card-actions>
      <v-card-actions >
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
    </v-img>
  </v-card>
</template>

<script>
  export default {
    name: "CardLogbook",
    props: {
      divelog: {
        type: Object,
        default() {
          return {}
        }
      } 
    },
    data() {
      return {
        show: false,
      }
    },
    methods: {
      deleteDive () {
        alert('Estas seguro de borrar esta inmersión?')
      },
    },
  }
</script>



