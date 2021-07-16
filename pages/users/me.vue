<template>
  <v-row >
    <v-col class="text-center" >
    <div class="position-relative">
      <v-img
        lazy-src="/dashboardUser.png"
        max-height="100%"
        max-width="100%"
        src="/dashboardUser.png"
      ></v-img> 
      <div class="position-absolute ml-6">
        <h2 class=" white--text" > Sara´ Users  </h2>  
      </div>
    </div>
    <!-- <CardApis v-for="(image, idx) in images" :key="idx" :imagesProp="image.src" class="mt-5"/> -->
    <div class="mx-5"> 
      <CardApis class="mt-5"/>
      <CardApis class="mt-5"/>
    </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {

    methods: {
    goLogbook () {
      this.$router.push('/logbook')  
    },
    data() {
      return {
        images: [
          {
            src: "/avatar.png",
            title: "Logbook"
          },
          {
            src: "/inmersion.png",
            title: "Puntos de inmersión"
          },
          {
            src: "/mareas.png",
            title: "Tabla de mareas"
          },
          {
            src: "/metereologica.png",
            title: "Predicción metereológica"
          }
        ]
      }
    },
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
  left: 20%;
  transform: translate(-50%, -50%);
}

.text-black{
  color: black
}
</style>