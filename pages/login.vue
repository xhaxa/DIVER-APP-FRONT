<template>
  <v-container class="fill-height" >
    <v-row align="center" justify="center">
      <v-col cols="10" sm="10" md="10">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8" >
                  <v-card-text class="mt-5">
                    <h3 class="text-center text-h3"
                    >Tienes cuenta en DIVER LOG</h3>

                    <p class="text-center mt-4 mb-8 text-body-1">Ingresa tus datos para entrar</p>
                    <v-form>
                      <v-text-field
                        v-model="email"
                        label="Email"
                        name="Email"
                        prepend-icon="mdi-email"
                        type="text"
                        color="primary"
                        autocomplete="off"
                      />

                      <v-text-field
                        id="password"
                        v-model="pwd"
                        label="Password"
                        name="password"
                        :type="showPassword ? 'text' : 'Password'"
                        prepend-icon="mdi-lock"
                        color="primary"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
                      />
                      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-3 mb-3">
                    <v-btn class="mb-4" color="primary" dark @click="login">LOGIN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="primary">
                  <v-card-text class=" mt-2">
                    <h3 class="text-center text-h3">Si aún no tienes cuenta</h3>
                    <p
                      class="mt-4 mb-8 text-body-1 text-center"
                    >Presiona Sign up, registrate con nosotros y comienza a disfrutar</p>
                  </v-card-text>
                  <div class="text-center mb-5" >
                    <v-btn outlined @click="step++">SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="primary">
                  <v-card-text class=" mt-5">
                    <h3 class="text-center text-h3">Hola, Diver! </h3>
                    <p
                      class="text-center text-body-1 mt-4 mb-5"
                    >Presiona Login, e ingresa tus datos para entrar</p>
                  </v-card-text>
                  <div class="text-center mb-2">
                    <v-btn class="mt-5" outlined  @click="step--">LOGIN</v-btn>
                  </div>
                </v-col>


                <v-col cols="12" md="8">
                  <v-card-text class="mt-5">
                    <h3 class="text-center display-2 text-h3">Crear nueva cuenta</h3>

                    <p class="text-center mt-4 mb-5 text-body-1">Ingresa tus datos para registrarte </p>
                    <v-form>
                      <v-text-field
                        v-model="name"
                        label="Name"
                        name="Name"
                        prepend-icon="mdi-account"
                        type="text"
                        color="primary"
                      />
                      <v-text-field
                        v-model="email"
                        label="Email"
                        name="Email"
                        prepend-icon="mdi-email"
                        type="text"
                        color="primary"
                      />

                      <v-text-field
                        id="password"
                        v-model="pwd"
                        label="Password"
                        name="password"
                        :type="showPassword ? 'text' : 'Password'"
                        color="primary"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"

                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mb-6">
                    <v-btn  color="primary" dark @click="signUp" >SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import UsersServices from "~/services/UsersServices";

export default {
  layout: "landing",
  auth: "guest",
  data: () => ({
    step: 1,
    showPassword: false,
    email: "",
    pwd: "",
    name: "",
    error: false
  }),
  methods: {

    async signUp(){
      try {
        const res = await UsersServices.signUp(this.name, this.email, this.pwd)
        await this.$auth.setUserToken(res.token)
        await this.$auth.setUser(res.user)
      } catch (error) {
        alert('Wrong credentials')
        console.log(error)
      }
    },

    async login(){
      try {
        const response = await this.$auth.loginWith(
          'local',
          {
            data: {
              email: this.email,
              pwd: this.pwd
            }
          }
        )
        await this.$auth.setUser(response.data.user)
      } catch (error) {
        alert('Wrong credentials')
        console.log(`ERROR LOGIN ${error}`)
      }
    }
  }
}
</script>

