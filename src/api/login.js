import { buildRequestPOST } from './buildRequest';
import apiCredentials, { apiUrlLogin } from '../commons/apiCredentials';

export const apiLogin = async params => {
  const { apiUrl, apiUserName, apiPassword } = apiCredentials;
  const url = `${apiUrl}${apiUrlLogin}`
  const dataResponse = {
    success: false,
    message: '',
    data: [],
  };

  const request = {
    user: params.email,
    password: params.password,
  };

  try {
    const resp = await fetch(url, buildRequestPOST(apiUserName, apiPassword, request));
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
