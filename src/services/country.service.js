import axios from "axios";

const API_URL = "https://localhost:7190/api/crownfunding/";
const API_FLAG_URL = "https://countryflagsapi.com/png/";

const getCountries = (token) => {
  return axios.get(API_URL + "getCountries", { headers: { Authorization: token } });
};

const getCountryFlag = (codeIso) => {
  return axios.get(API_FLAG_URL + "codeIso");
};

const CountryService = {
  getCountryFlag,
  getCountries
}

export default CountryService;
