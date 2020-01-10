import axios from 'axios';

let axiosConfig = {
  headers: {
    "x-rapidapi-host": "vindecoder.p.rapidapi.com",
	  "x-rapidapi-key": "DWes8YI3n7mshbkYiaCuFjSZuKtXp1p9OJWjsnoYcWNZro0ga2"
  },
};

class ApiUtils {

  get = async (vin) => {
    return axios
      .get('https://vindecoder.p.rapidapi.com/decode_vin?vin=' + vin, axiosConfig)
      .then(res => {
          return res.data;
        }).catch(err => {
        return Promise.resolve({ err })
      });
  };
}

export default new ApiUtils();
