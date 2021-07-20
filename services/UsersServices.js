import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

export default {
  async signUp (name, email, pwd) {
    // Esto es lo mismo que {name: name, email: email, pwd: pwd} le indicamos lo que espera recibir el back (API)
    const response = await api.post('/auth/signup', {name, email, pwd});
    return response.data;
  },

  async getDivelog(){
    const response = await api.get('/users/me/divelog')
    return response.data
  }
}


