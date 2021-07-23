<template>
  <v-card
    max-width="100%"
    color="primary"
    dark
    class="mt-5"
  >
    <v-img
      gradient="90deg, rgba(190,102,245,1) 0%, rgba(0,226,217,1) 100%"
    >
     <!-- <pre>  
      {{ divelog }}
    </pre>  -->
      <v-card-actions> 
        <v-card-title>Inmersión {{ divelog.spot }} </v-card-title>
        <v-spacer />
        <v-icon 
          class="mr-1"
          @click="deleteDive"
        >{{ 'mdi-delete-alert-outline' }}
        </v-icon>     
      </v-card-actions>

      <v-card-actions >
        <v-card-subtitle>{{ divelog.depth }} metros</v-card-subtitle>
        <v-card-subtitle>{{ divelog.duration }} minutos</v-card-subtitle>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition >
        <div  v-show="show" class="text-left ">
          <v-divider></v-divider>
          <v-card-title class="ml-2 text-decoration-underline">Información detallada </v-card-title>
          <v-card-actions>
            <v-card-text >
            Fecha: {{ divelog.date }} <br> Hora de entrada: {{ divelog.time }}
            </v-card-text>  
            <v-spacer />
            <v-card-text>
            Presión inicial: {{ divelog.bottle.initialPressure }} bares <br> Presión final: {{ divelog.bottle.finalPressure }} bares
            </v-card-text>
          </v-card-actions>
            
          <v-card-actions>
            <v-card-text>
            Traje:  {{ divelog.equipment.wetsuit }} <br> Grosor: {{ divelog.equipment.thick }} mm <br> Lastre: {{ divelog.equipment.kg }} kg <br> Otros: {{ divelog.equipment.other }}
            </v-card-text>
            <v-card-text>
            Temperatura Superficie: {{ divelog.weather.surfaceTemperature }} ºC <br>
            Temperatura Agua: {{ divelog.weather.waterTemperature }} º C <br> Clima: {{ divelog.weather.clime }} <br> Visibilidad:  {{ divelog.weather.visibility }}
            </v-card-text>
          </v-card-actions>
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
      async deleteDive() {
        try {
          alert('Estas seguro de borrar esta inmersión?')
          
           await this.$axios.delete(`/users/me/divelog/${this.divelog._id}`, {     
            headers: {
            token: this.$auth.strategy.token.get().slice(7)
            }
          })
          this.$emit("deleteLog", this.divelog._id)
          
        } catch (error) {
          console.log(error);
        }
      },
      // async seeDive() {
      //   try {
      //     alert('')

      //     await this.$axios.get(`/users/me/divelog/${this.divelog._id}`, {     
      //       headers: {
      //         token: this.$auth.strategy.token.get().slice(7)
      //       }
      //     })
      //     this.$router.push("/newdive" );
          
          
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
    },
  }
</script>



