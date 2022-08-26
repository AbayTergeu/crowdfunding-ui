import axios from "axios";

const API_URL = "https://localhost:7190/api/investments/";

const getList = (token) => {
  return axios.get(API_URL + "getList", { headers: { Authorization: token } });
};

const getAccountByClientId = (clientId, token) => {
  return axios.get(API_URL + "getAccountByClientId/" + clientId, { headers: { Authorization: token } });
};

const add = (data, token) => {
  const json = JSON.stringify(data);
  return axios
    .post(API_URL + "add", json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const UserService = {
  getList,
  add,
  getAccountByClientId
}

export default UserService;
