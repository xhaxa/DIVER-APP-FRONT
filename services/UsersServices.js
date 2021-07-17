import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

export default {
  async signUp (name, email, pwd) {
    try {
      const body = {name, email, pwd}

      // Esto es lo mismo que {name: name, email: email, pwd: pwd} le indicamos lo que espera recibir el back (API)
      const response = await api.post('/auth/signup', body);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getLogbooks(){
    const response = await api.get('/logbooks')
    return response.data
  }
}


