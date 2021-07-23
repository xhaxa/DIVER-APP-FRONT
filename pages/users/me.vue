<template>
  <v-row >
    <v-col cols="12" class="text-center" >
      <div  class="position-relative">
        <v-carousel
          cycle
          height="40vw"
          :show-arrows="false"
          hide-delimiters
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </div>

      <div class="mx-5 py-15">
        <h2 class="text-left" > DIVER APP {{ user.name }} </h2>
        <v-divider></v-divider>
        <CardApis v-for="(image, idx) in images" :key="idx" :prop="image" class="mt-5" @click.native="goLogbook(image.to)"/>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        user: this.$auth.user,
        images: [
          {
            to: "/logbook",
            src: "/avatar.png",
            title: "Logbook"
          },
          {
            to: "/puntosinmersion",
            src: "/inmersion.png",
            title: "Puntos de inmersión"
          },
          {
            to: "/tablademareas",
            src: "/mareas.png",
            title: "Tabla de mareas"
          },
          {
            to: "/prediccionmetereologica",
            src: "/metereologica.png",
            title: "Predicción metereológica"
          }
        ],
        items: [
          {
            src: "/carousel1.png",
          },
          {
            src: "/carousel2.png",
          },
          {
            src: "/carousel3.png",
          },
          {
            src: "/carousel4.png",
          },
          {
            src: "/carousel5.png",
          },
           {
            src: "/carousel6.png",
          },
           {
            src: "/carousel7.png",
          },
           {
            src: "/carousel8.png",
          },
           {
            src: "/carousel9.png",
          },
           {
            src: "/carousel10.png",
          }
        ],
      }
    },
    methods: {
      goLogbook (toParams) {
        console.log("holaaaa");
        this.$router.push(toParams)
      }
    }
  }
</script>

<style >
.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
  top: 90%;
  left: 10%;
  transform: translate(-50%, -50%);
}

</style>
