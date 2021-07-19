<template>
  <v-row>
    <v-col class="text-center">
      <CardSignup />
    </v-col>
  </v-row>
</template>

<script>
export default {

  layout: "landing",
  auth: "guest",
  // props: {
  //   name: String
  // },
  methods: {
    // childMessageReceived(arg1) {
    //   console.log("holamensajee hijo" + arg1)
    // }
  }
  
}
</script>

