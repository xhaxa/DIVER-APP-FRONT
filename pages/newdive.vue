<template>
  <v-row >
    <v-col 12 class="text-center" >

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
                <v-text-field

                  label="Fecha"
                  required
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-calendar-blank"
                ></v-text-field>

              </v-col>
              
              <v-col
                cols="12" 
                md="5"
                class="ml-auto"
              >
                <v-text-field

                  label="Hora entrada"
                  required
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-clock-outline"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field

                  label="Ubicación"
                  required
                  filled
                  clearable
                  dense
                  prepend-icon="mdi-map-marker"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="5"
              >
                <v-text-field

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



        <CardSquare title="Equipo" color="primary"/>
        <CardSquare title="Botella" color="primary"/>   
        <CardSquare title="Clima" color="primary"/>  
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
  
 /* import {getLogbooks} from '~/services/UsersServices' */

  export default {
   layout: "logbook",
    
    // async asyncData() {
    //   const logbooks = await getLogbooks()
    //   return { logbooks }
    // }
  } 
  

</script>

<style >

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