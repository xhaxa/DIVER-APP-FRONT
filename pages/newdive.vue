<template>
  <v-row >
    <v-col cols="12" class="text-center" >

      <div class="pt-16 my-15"> 
        <h1>BITÁCORA</h1>
        <h2 class="text-left mt-15"> Nueva </h2>  
        
        <v-divider>
        </v-divider>

        <v-form  class="mb-4 mt-8" >
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
                      :rules="rules" 
                      hide-details="auto"
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
                      :rules="rules" 
                      hide-details="auto"
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
              </v-col>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="dive.spot"
                  label="Ubicación"
                  :rules="rules" 
                  hide-details="auto"
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

                  v-model="dive.duration"
                  type="number"
                  label="Duración inmersión"
                  :rules="rules" 
                  hide-details="auto"
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
                  v-model="dive.depth"
                  type="number"
                  label="Profundidad"
                  :rules="rules" 
                  hide-details="auto"
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-arrow-collapse-down"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-row class="mt-5" align="center" justify="center">
          <CardSquareEquipo
          @sendDataEquip="dataFromEquip" color="primary"/>
         
          <CardSquareBotella @sendDataBottle="dataFromBottle" color="primary"/>
          <CardSquareClima @sendDataClime="dataFromClime" color="primary"/>
        </v-row>
      </div>
        
      <v-btn class="mb-5"
      color="primary"
      elevation="2"
      @click="addDive"
      > GUARDAR
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    layout: "logbook",
    data() {
      return {
        rules: [
          value => !!value || 'Required.',
        ],
        map: null,
        menu: false,
        modal: false,
        menufecha: false,
        menu2: false,
        modal2: false,
        dive: {
          date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
          time: null,
          spot: '',
          duration: '',
          depth: '',
          bottle: {
            finalPressure: null,
            initialPressure: null
          },
          weather: {
            surfaceTemperature: null,
            waterTemperature: null,
            clime: null,
            visibility: null
          },
          equipment: {
            wetsuit: null,
            kg: null,
            thick: null,
            other: null
          }
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
        this.dive.bottle.initialPressure = parseInt(initialPressure)
        this.dive.bottle.finalPressure = parseInt(finalPressure)
      },
      dataFromClime(surfaceTemperature, waterTemperature, clime, visibility ) {
        this.dive.weather.surfaceTemperature = parseInt(surfaceTemperature)
        this.dive.weather.waterTemperature = parseInt(waterTemperature)
        this.dive.weather.clime = clime
        this.dive.weather.visibility = visibility
      },
      dataFromEquip(wetsuit, kg, thick, other ) {
        this.dive.equipment.wetsuit = wetsuit
        this.dive.equipment.kg = parseInt(kg)
        this.dive.equipment.thick = parseInt(thick)
        this.dive.equipment.other = other
      },
      async addDive() {
        try { 
          await this.$axios.$post('/users/me/divelog', this.dive, {
            headers: {
              token: this.$auth.strategy.token.get().slice(7)  
            }
          })

          this.$router.push("/logbook" );
        } catch (error) {
          console.log(error);
        }
      }

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
     
    }
  }
</script>

<style >

  /* #map {
    width: 100%;
    height: 500px;
  } */
  
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

</style>