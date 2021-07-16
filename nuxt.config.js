import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - diver-app-front',
    title: 'diver-app-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap' }
    ] 
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  router: {
    middleware: ["auth"]
  },

  auth: {
    redirect: {
      login: "/login", // if login is required, go here
      logout: "/", // after logout, go here
      home: "/users/me" // after login, go here
    },
    strategies: {
      local: {
        token: {
          property: "token",
          global: true
        },
        user: {
          property: "user"
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: false,
          user: false
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:5000/api', // Used as fallback if no runtime config is provided
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: { 
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    // defaultAssets: false,
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: "00E2D9",
          accent: colors.orange.lighten1,
          secondary: "BE66F5",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "00E2D9",
          secondary: "BE66F5",
          darken: "212121",
          gradient: "linear-gradient(90deg, rgba(190,102,245,1) 0%, rgba(0,226,217,1) 100%)",
          accent: colors.shades.black,
          error: colors.red.accent3,
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
