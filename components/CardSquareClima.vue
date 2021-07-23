<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-card class="ma-5 d-inline-flex"
        max-width="500"
        color="primary"
        dark
        v-on="on"
      >
        <v-img class="pa-15"
          gradient="90deg, rgba(190,102,245,1) 0%, rgba(0,226,217,1) 100%"
        >
        <v-card-text>CLIMA </v-card-text>
        <v-icon x-large> mdi-weather-sunny </v-icon>               
        </v-img>
      </v-card>
    </template>
    <v-card >
      <v-card-title>
        <span class="headline">CLIMA</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field 
              v-model="surfaceTemperature"
              type="number"
              label="ºC en superficie" 
              clearable
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 md4>
              <v-text-field 
              v-model="waterTemperature"
              type="number"
              label="ºC bajo el agua" 
              clearable
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select
                v-model="clime"
                
                :items="['Soleado', 'Nublado', 'LLuvioso', 'Noche']"
                label="Clima"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select
                v-model="visibility"
                :items="['< 5 metros', '10 metros', '> 15 metros']"
                label="Visibilidad"
              ></v-select>
            </v-flex>


            
          </v-layout>
        </v-container>
        <!-- <small>*indicates required field</small> -->
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary"  @click="dialog = false">Cerrar</v-btn>
        <v-btn color="primary"  @click="sendData" >Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "CardSquare",
    data() {
      return {
        dialog: false,
        surfaceTemperature: "",
        waterTemperature: "",
        clime: "",
        visibility: ""
      }
    },
    methods: {
      async sendData() {
        try {
          await this.$emit('sendDataClime', this.surfaceTemperature, this.waterTemperature, this.clime, this.visibility)
          this.dialog = false
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>



