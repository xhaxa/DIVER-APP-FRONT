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
        <v-card-text>EQUIPO </v-card-text>
        <v-icon x-large> mdi-diving-snorkel </v-icon>               
        </v-img>
      </v-card>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">EQUIPO</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-select
                v-model="wetsuit"
                :items="['Bañador', 'Corto', 'Húmedo', 'Seco', 'Semiseco']"
                label="Tipo de traje"
              ></v-select>
            </v-flex>

            <v-flex xs12 sm6 md4>
              <v-text-field 
              v-model="kg"
              type="number"
              label="Kg en lastre" 
              clearable
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 md4>
              <v-text-field 
              v-model="thick"
              type="number"
              label="Grosor de traje" 
              clearable
              ></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="other"
                label="Otros"
                clearable
                hint="Si necesitas rellenar otros datos de interés"
                persistent-hint
              ></v-text-field>
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
        wetsuit: "",
        kg: "",
        thick: "",
        other: ""
      }
    },
    methods: {
      async sendData() {
        try {
          await this.$emit('sendDataEquip', this.wetsuit, this.kg, this.thick, this.other)
          this.dialog = false
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>



