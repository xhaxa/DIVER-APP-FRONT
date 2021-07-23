<template>
  <v-row >
    <v-col cols="12" class="text-center" >

      <div class="pt-16 my-15"> 
        <h1>BITÁCORA</h1>
        <h2 class="text-left mt-2"> Nueva </h2>  
        
        <v-divider>
        </v-divider>

        <v-form  class="mb-4" >
          <v-container>
            <v-row>

              <v-col
                cols="12" 
                sm="5"
              >
                <v-menu
                  v-model="menufecha"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dive.date"
                      label="Fecha"
                      required
                      filled
                      clearable
                      dense
                      prepend-icon="mdi-calendar-blank"
                      
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dive.date"
                    @input="menufecha = false"
                  ></v-date-picker>
                </v-menu>
                <!-- <v-text-field

                  label="Fecha"
                  required
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-calendar-blank"
                ></v-text-field> -->

              </v-col>
              
              <v-col
                cols="12" 
                sm="5"
                class="ml-auto"
              >
                <v-menu
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="dive.time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dive.time"
                      label="Hora entrada"
                      required
                      filled
                      clearable
                      prepend-icon="mdi-clock-outline"
                      dense
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker>
                </v-menu>
                <!-- <v-text-field

                  label="Hora entrada"
                  required
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-clock-outline"
                >
                </v-text-field> -->
              </v-col>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="spot"
                  label="Ubicación"
                  required
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-map-marker"
                ></v-text-field>
                <!-- <mapbox-map id="map"
                  style="margin-top: 1em; height: 400px;"
                  access-token="pk.eyJ1IjoieGhheGEiLCJhIjoiY2txdGNobGV5MDZtcjJ1cDhqM2J5eWMwbiJ9.p_dcnkD8_93K9J5C-Jf6Zg"
                  map-style="mapbox://styles/mapbox/streets-v11">
                  <mapbox-geocoder />
                </mapbox-map> -->

              </v-col>

              <v-col
                cols="12"
                md="5"
              >
                <v-text-field

                  v-model="duration"
                  label="Duración inmersión"
                  required
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-timer-outline"
                ></v-text-field>
              </v-col>  

              <v-col
                cols="12"
                md="5"
                class="ml-auto"
              >
                <v-text-field
                  v-model="depth"
                  label="Profundidad"
                  required
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-arrow-collapse-down"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <CardSquareEquipo
        @sendDataEquip="dataFromEquip" color="primary"/>
        <CardSquareBotella @sendDataBottle="dataFromBottle" color="primary"/>
        <CardSquareClima @sendDataClime="dataFromClime" color="primary"/>
        <!-- <CardSquare v-for="(item, i) in items"
          :key="i" :title="item.title" :icon="item" color="primary"/> -->

        <!-- <CardLogbook v-for="(logbook,idx) in logbooks" :key="idx" :logbook="logbook" /> -->
      </div>
        
      <v-btn class="mb-5"
      color="primary"
      elevation="2"
      
      > GUARDAR
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>

  
  // import { addDive } from '~/services/UsersServices' 

  export default {
    layout: "logbook",
    data() {
      return {
        map: null,
        menu: false,
        modal: false,
        menufecha: false,
        menu2: false,
        modal2: false,
        dive: {
          date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
          time: null,
          spot: "",
          duration: "",
          depth: "",
          finalPressure: null,
          initialPressure: null,
          surfaceTemperature: null,
          waterTemperature: null,
          clime: null,
          visibility: null
        }
      }
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      dataFromBottle(initialPressure, finalPressure) {
        this.dive.initialPressure = parseInt(initialPressure)
        this.dive.finalPressure = parseInt(finalPressure)
      },
      dataFromClime(surfaceTemperature, waterTemperature, clime, visibility ) {
        this.dive.surfaceTemperature = parseInt(surfaceTemperature)
        this.dive.waterTemperature = parseInt(waterTemperature)
        this.dive.clime = clime
        this.dive.visibility = visibility
      },
      dataFromEquip(wetsuit, kg, thick, other ) {
        this.dive.wetsuit = wetsuit
        this.dive.kg = parseInt(kg)
        this.dive.thick = parseInt(thick)
        this.dive.other = other
      },
/*
      async addDive(divelog) {
        try {
          const newDive =   
          await this.$axios.post('/users/me/divelog', {
            headers: {
            token: this.$auth.strategy.token.get().slice(7)  
            }
          }, divelog)
          console.log(divelog);
        } catch (error) {
          console.log(error);
        }
      }
*/
// async signUp(){
//       try {
//         const res = await UsersServices.signUp(this.name, this.email, this.pwd)
//         await this.$auth.setUserToken(res.token)
//         await this.$auth.setUser(res.user)
//       } catch (error) {
//         alert('Wrong credentials')
//         console.log(error)
//       }
//     },

    // mounted() {
    //   //  const mapboxgl = require('mapbox-gl')
    //   //  const map = new mapboxgl.Map({
    //   //    accessToken: 'pk.eyJ1IjoieGhheGEiLCJhIjoiY2txdGNobGV5MDZtcjJ1cDhqM2J5eWMwbiJ9.p_dcnkD8_93K9J5C-Jf6Zg',
    //   //    container: 'map', // <div id="map"></div>
    //   //    style: 'mapbox://styles/mapbox/streets-v9',
    //   //    center: [-21.9270884, 64.1436456],
    //   //    zoom: 13
    //   // })
    // }


    // async asyncData() {
    //   const logbooks = await getLogbooks()
    //   return { logbooks }
    // }
     
    }
  }
</script>

<style >

  #map {
    width: 100%;
    height: 500px;
  }
  
  .position-relative {
    position: relative;
  }

  .position-absolute {
    position: absolute;
    top: 90%;
    left: 12%;
    transform: translate(-50%, -50%);
  }
  .position-absolute-avatar {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* h2 {
    display: inline-block;
  } */


</style>