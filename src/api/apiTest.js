import { buildRequestGET } from './buildRequest';

export const apiTest = async params => {
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
  const dataResponse = {
    success: false,
    message: '',
    data: [],
  };

  const request = { ...params };

  try {
    const resp = await fetch(url, buildRequestGET(request));
    const respJSON = await resp.json();
    dataResponse.success = true;
    dataResponse.data = respJSON;
  } catch (error) {
    dataResponse.message = error.message;
    dataResponse.data = error;
  }
  return dataResponse;
};
