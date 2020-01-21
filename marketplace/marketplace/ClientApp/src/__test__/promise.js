import axios from "axios";
//Prueba para cualquier APi - La url es la api que le esta llegando.
export const getDataFromApi = url => {
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

export default getDataFromApi;
