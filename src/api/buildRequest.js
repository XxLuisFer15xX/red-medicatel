export const buildRequestGET = (username, password) => {
  const auth = 'Basic ' + window.btoa(username + ":" + password);
  return {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': auth,
    },
  };
};

export const buildRequestPOST = (username, password, data) => {
  const auth = 'Basic ' + window.btoa(username + ":" + password);
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': auth,
    },
    body: JSON.stringify(data),
  };
};
