import axios from "axios";
const API_URL = "http://localhost:8080/api/user";
class AuthService {
  login() {}
  logout() {}
  register(username, email, password, role) {
    //將axios送來的promise return回去
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }
}

export default new AuthService();
