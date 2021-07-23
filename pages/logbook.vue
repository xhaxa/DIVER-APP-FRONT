<template>
  <v-row >
    <v-col cols="12"  class="text-center">
      <div class="position-relative mb-10">
        <v-img
          lazy-src="/logbook.png"
          height="50%"
          src="/carousel1.png" 
        ></v-img> 

        <v-avatar class="position-absolute-avatar mb-5" color="primary" size="213" >
          <v-avatar size="200">
            <img
              src="/avatar.png"
              alt="John"
            >
          </v-avatar>
        </v-avatar>  
      </div>
    <div class="mt-16 py-15 mx-5"> 
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
          <v-icon dark >
            mdi-plus
          </v-icon>
        </v-btn>
      </div>
      
      <v-divider />
      <p class="text-left"> ( {{ totalDive }} ) inmersiones</p>  
      <CardLogbook v-for="(divelog) in divelogs" :key="divelog._id" :divelog="divelog" @deleteLog="deleteLogFront"/> 
    </div>
    </v-col>
  </v-row>
</template>

<script>

  export default {
    async asyncData({ $axios, $auth }) {
      try {
        const { divelog } = await $axios.$get('/users/me', {     
          headers: {
            token: $auth.strategy.token.get().slice(7)
          }
        })
        return { divelogs: divelog }
      } catch (error) {
        console.log(error);
      }
    },
    data () {
      return {
  
      }
    },
    computed: {
      totalDive() {
        return this.divelogs.length
      }
    }
    ,
    methods: {
      goNewDive () {
        this.$router.push('/newdive')  
      },
      deleteLogFront (divelogId) {
      // console.log("holaaa front");
      // console.log(this.divelogs);
      // console.log(divelogId);     
        const index = this.divelogs.findIndex ( item => item._id === divelogId )
        this.divelogs.splice(index, 1)
        console.log( index, `index`);
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