<template>
  <v-row >
    <v-col 12 class="text-center" >
      <div class="position-relative">
        <v-img
          lazy-src="/logbook.png"
          max-height="100%"
          max-width="100%"
          src="/logbook.png" class="mb-10"
        ></v-img> 
        <div class="position-absolute ml-6">
          <h2 class=" white--text" > Logbook </h2>  
        </div>

        <v-avatar class="position-absolute-avatar mb-5" mb-5 color="primary" size="140">
          <v-avatar size="130">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </v-avatar>  
      </div>
    <div class="pt-15"> 
      <v-divider></v-divider>
      <CardLogbook />
      
      <CardLogbook />
      <!-- <CardLogbook v-for="(logbook,idx) in logbooks" :key="idx" :logbook="logbook" /> -->
    </div>
      

    </v-col>
  </v-row>
</template>

<script>
 /* import {getLogbooks} from '~/services/UsersServices'

  export default {
    async asyncData() {
      const logbooks = await getLogbooks()
      return { logbooks }
    }
  } 
  */

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

.background{
  background-color: white;
}

.text-black{
  color: black
}

</style>