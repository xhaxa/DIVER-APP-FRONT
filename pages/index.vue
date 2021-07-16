<template>
  <v-row justify="center" align="center" >
    <v-col cols="12" sm="12" md="12" >
      <div class="position-relative">
        <v-img
          lazy-src="/landpage.png"
          max-height="100%"
          max-width="100%"
          src="/landpage.png"
        ></v-img>
        <h1 class="text-center white--text">Bienvenido a tu LOGBOOK digital</h1>
        <p class="white--text">No vuelvas a perder ninguna inmersión</p>
        <v-btn class="position-absolute-button" color="warning" elevation="2" @click.native="goLogin"> ENTRAR</v-btn>
      </div>
      <!-- <div class="position-relative">
        <v-parallax 
        dark
        src="/landpage.png"
        
        >
        </v-parallax>
        <h1 class="text-center white--text">Bienvenido a tu LOGBOOK digital</h1>
        <p class="text-center white--text">No vuelvas a perder ninguna inmersión</p>

        <v-btn class="position-absolute-button" color="warning" elevation="2" @click.native="goLogin"> ENTRAR</v-btn>
      </div> -->

      <div class="position-relative">
        <v-img
          lazy-src="/Vectary texture.png"
          max-height="400"
          max-width="300"
          src="/Vectary texture.png"
        ></v-img>
        <h2 class="position-absolute"> No pierdas ni una inmersión más </h2>  
      </div>
      
      <div class="position-relative">
        <v-img
          lazy-src="/Vectary texture-1.png"
          max-height="400"
          max-width="300"
          src="/Vectary texture-1.png"
        ></v-img>
        <h2 class="position-absolute"> Desde cualquier punto del mundo </h2>  
      </div>

      <div class="position-relative"> 
        <v-img
          lazy-src="/Vectary texture-2.png"
          max-height="400"
          max-width="300"
          src="/Vectary texture-2.png"
        ></v-img>
        <h2 class="position-absolute"> No pierdas ni una inmersión más </h2>  
      </div>

    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "landing",
  auth: "guest",
  methods: {
    goLogin () {
      this.$router.push('/login')  
    }
  },
}
</script>

<style scoped>
  .position-relative {
    position: relative;
  }

  h1{
    position: absolute;
    top: 20%;    
  }

  p{
    position: absolute;
    top: 55%;
    left: 15%; 
  }

  .position-absolute-button {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .position-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
