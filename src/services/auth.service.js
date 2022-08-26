import axios from "axios";

const API_URL = "https://localhost:7190/api/auth/";
const TEST_API_URL = "https://localhost:7190/api/crownfunding/testApi";

const register = (username, email, password) => {
  
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const test = () => {  
  return axios.get(TEST_API_URL);
};

const login = (m, p) => {
  const json = JSON.stringify({ Email: m, Password : p });
  return axios
    .post(API_URL + "login", json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        return JSON.stringify(response.data);
      }      
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  test
}

export default AuthService;
