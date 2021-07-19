<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="10" sm="10" md="12">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-5">
                    <h3 class="text-center text-h3"
                    >Tienes cuenta en DIVER</h3>
                    
                    <p class="text-center mt-4 mb-8 text-body-1">Ingresa tus datos para entrar</p>
                    <v-form>
                      <v-text-field
                        v-model="email"
                        label="Email"
                        name="Email"
                        prepend-icon="email"
                        type="text"
                        color="primary"
                      />

                      <v-text-field
                        id="password"
                        v-model="pwd"
                        label="Password"
                        name="password"
                        :type="showPassword ? 'text' : 'Password'"
                        prepend-icon="lock"
                        color="primary"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"  
                      />
                      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-3 mb-3">
                    <v-btn color="primary" dark @click="login">LOGIN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="primary">
                  <v-card-text class="white--text mt-2">
                    <h3 class="text-center text-h3">Si aún no tienes cuenta</h3>
                    <p
                      class="mt-4 mb-8 text-body-1 text-center"
                    >Presiona Sign up, registrate con nosotros y comienza a disfrutar</p>
                  </v-card-text>
                  <div class="text-center mb-5" >
                    <v-btn outlined dark @click="step++">SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="primary">
                  <v-card-text class=" mt-5">
                    <h3 class="text-center text-h3">Hola, Amigo! Te esperabamos</h3>
                    <p
                      class="text-center text-body-1 mt-4 mb-5"
                    >Presiona Login, e ingresa tus datos para entrar</p>
                  </v-card-text>
                  <div class="text-center mb-2">
                    <v-btn outlined  @click="step--">LOGIN</v-btn>
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
                        prepend-icon="person"
                        type="text"
                        color="primary"
                      />
                      <v-text-field
                        v-model="email"
                        label="Email"
                        name="Email"
                        prepend-icon="email"
                        type="text"
                        color="primary"
                      />

                      <v-text-field
                        id="password"
                        v-model= "pwd"
                        label="Password"
                        name="password"
                        :type="showPassword ? 'text' : 'Password'" 
                        color="primary"
                        prepend-icon="mdi-lock" 
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" 
                        
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mb-5">
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
  //   props: {
  //   source: String
  // },
  data: () => ({
    step: 1,
    showPassword: false,
    email: "",
    pwd: "",
    name: "",
    error: false
  }),
  methods: {

    signUp(){
      UsersServices.signUp(this.name, this.email, this.pwd)
        .then((res) => {
          localStorage.setItem("token", res.token)
          console.log("hola signUP");
          console.log(res.email);
          this.$router.push("/users/me") // no me redirije...
          })
        .catch((err) => console.log(`ERROR SIGNUP ${err}`))
    },

    
    sendNameUser() {
      this.$root.$emit("messageFromUserName", this.name)
    },


    /* ESTO SERÍA LO MISMO QUE ARRIBA
    async signUp(){
      try {
        const res = await UsersServices.signUp(this.name, this.email, this.pwd);
      } catch (err) {
      console.log(err);
      }
    }
    */
    async login(){
      try {
        await this.$auth.loginWith(
          'local', 
          {
            data: {
              email: this.email,
              pwd: this.pwd
            }
          }
        )
        console.log("hola LOGIN");
      } catch (error) {
        console.log(`ERROR LOGIN ${error}`)
      }
    }
  }
}
</script>

