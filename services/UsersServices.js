import axios from "axios";

const api = axios.create({
  baseURL: process.env.baseUrl
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
  },

  async deleteDive(divelog){
    const response = await api.delete(`/users/me/divelog/${divelog._id}`, divelog)
    return response.data
  },
}

/* NO SE HACEN PORQUE CON EL MODULÓ DE AXIOS PARA NUXT NO
  async addDive(divelog){
    const response = await api.post('/users/me/divelog', divelog)
    return response.data
  },

  
  async updateDive(divelog){
    const response = await api.put(`/users/me/divelog/${divelog._id}`, divelog)
    return response.data
  },
}
*/

