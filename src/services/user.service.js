import axios from "axios";

const API_URL = "https://localhost:7190/api/crownfunding/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getCountries = (token) => {
  return axios.get(API_URL + "getCountries", { headers: { Authorization: token } });
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getCountries
}

export default UserService;
