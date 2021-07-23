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
    <v-app-bar dark 
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title @click="goHome" v-text="title" />
      <v-spacer></v-spacer>
      <v-btn class="mr-5" text dark outlined @click="logout">Salir</v-btn>
    </v-app-bar>

    <v-main >
      <v-container pa-0>
        <Nuxt />
      </v-container>
    </v-main>
    
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
      title: 'DIVER LOG'
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    goHome() {
      this.$router.push('/users/me')
    }
  }
}
</script>

