<template>
  <v-card class="ma-5 d-inline-flex"
    max-width="200"
    color="primary"
    dark
    
  >
    <v-img class="pa-15"
      gradient="90deg, rgba(190,102,245,1) 0%, rgba(0,226,217,1) 100%"
    >
    <v-card-text>{{ icon.title }} </v-card-text>
    <v-icon x-large>{{ icon.icon }}</v-icon>               
    </v-img>
  </v-card>
</template>

<script>
  export default {
    name: "CardSquare",
    props: {
      icon: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>



