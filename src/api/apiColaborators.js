import { buildRequestGET } from './buildRequest';
import apiCredentials, { apiUrlColaboratos } from '../commons/apiCredentials';

export const apiColaboratos = async () => {
  const { apiUrl, apiUserName, apiPassword } = apiCredentials;
  const url = `${apiUrl}${apiUrlColaboratos}`
  const dataResponse = {
    success: false,
    message: '',
    data: [],
  };

  try {
    const resp = await fetch(url, buildRequestGET(apiUserName, apiPassword));
    const respJSON = await resp.json();
    if (resp.status === 200) {
      dataResponse.success = true;
      dataResponse.data = respJSON;
    } else {
      dataResponse.message = resp.statusText;
    }
  } catch (error) {
    dataResponse.message = error.message;
    dataResponse.data = error;
  }
  return dataResponse;
};
