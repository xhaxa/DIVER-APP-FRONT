<template>
  <v-row >
    <v-col >
      <div class="position-relative mb-10">
        <v-img
          lazy-src="/logbook.png"
          max-height="100%"
          max-width="100%"
          src="/carousel1.png" 
        ></v-img> 

        <v-avatar class="position-absolute-avatar mb-5" mb-5 color="primary" size="140">
          <v-avatar size="130">
            <img
              src="/avatar.png"
              alt="John"
            >
          </v-avatar>
        </v-avatar>  
      </div>
    <div class="py-12 mx-5"> 
      <div class="d-flex justify-space-between align-end
      ">
        <h2 class="text-left"> Logbook </h2>  
        <v-btn 
          class="mx-2"
          fab
          dark
          color="primary"
          @click.native="goNewDive"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>

      </div>
      
      <v-divider />
      <CardLogbook v-for="(divelog,idx) in divelogs" :key="idx" :divelog="divelog" /> 
    </div>
      

    </v-col>
  </v-row>
</template>

<script>

  export default {
    async asyncData({ $axios, $auth }) {
      try {
        const {divelog} = await $axios.$get('/users/me', {     
          headers: {
            token: $auth.strategy.token.get().slice(7)
          }
        })
        return { divelogs: divelog }
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      goNewDive () {
      this.$router.push('/newdive')  
    }
  },
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

</style>