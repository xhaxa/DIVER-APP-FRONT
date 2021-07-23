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
        <v-card-text>BOTELLA </v-card-text>
        <v-icon x-large> mdi-diving-scuba-tank </v-icon>               
        </v-img>
      </v-card>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">BOTELLA</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>

            <v-flex xs12 sm5 >
              <v-text-field 
              v-model="initialPressure"
              label="Presión inicial"
              type="number"
              clearable
              prepend-icon="mdi-arrow-collapse-down" hint="Solo indicar el número de bares" ></v-text-field>
            </v-flex>
            <v-spacer />
            <v-flex xs12 sm5  >
              <v-text-field
              type="number"
              v-model="finalPressure"
              label="Presión final" 
              clearable
              prepend-icon="mdi-arrow-collapse-up" 
              hint="Solo indicar el número de bares">bar</v-text-field>
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
        initialPressure: "",
        finalPressure: ""
      }
    },
    methods: {
      async sendData() {
        try {
          await this.$emit('sendDataBottle', this.initialPressure, this.finalPressure)
          this.dialog = false
        } catch (error) {
          console.log(error);
        }       
      }
    }
  }
</script>



