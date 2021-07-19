<template>
  <v-app >
    <v-navigation-drawer 
      v-model="drawer"
      :clipped="clipped"
      fixed
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      app
      dark
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      absolute
      dark
      shrink-on-scroll
      src="/carousel2.png"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="150"
    >
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->
            
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title @click="goLogbook" v-text="title" />
      

      <v-spacer></v-spacer>
      <!-- <v-btn text rounded>Login</v-btn>
      <v-btn text rounded>Sign Up</v-btn> -->
      <v-btn class="mr-5 mt-2" text dark outlined @click="logout">Salir</v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="800"
    >
      
      <v-main >
        <v-container>
        <Nuxt />
        
        </v-container>
      </v-main>
    </v-sheet>


    
    <v-footer dark
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  layout: "logbook",
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-diving-snorkel',
          title: '',
          
        },
        {
          icon: ' mdi-menu-right-outline',
          title: 'LOGBOOK',
          to: '/logbook'
        },
        {
          icon: ' mdi-menu-right-outline',
          title: 'PUNTOS DE INMERSIÓN',
          to: '/puntosinmersion'
        },
        {
          icon: ' mdi-menu-right-outline',
          title: 'TABLA DE MAREAS',
          to: '/tablamareas'
        },
        {
          icon: ' mdi-menu-right-outline',
          title: 'PREDICCIÓN METEREOLÓGICA',
          to: '/prediccionmetereologica'
        },
      ],
      title: 'LOGBOOK'
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    goLogbook() {
      this.$router.push('/logbook')
    }
  }
}
</script>

