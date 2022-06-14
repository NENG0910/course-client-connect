import axios from "axios";
const API_URL = "https://vast-falls-97220.herokuapp.com/api/user";
class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password, role) {
    //將axios送來的promise return回去
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }
  getCurrentUser() {
    //判斷目前是否登入，來改變nav的形式
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
