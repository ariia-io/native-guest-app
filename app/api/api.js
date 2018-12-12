// Api.js

var ApiUtils = {  
  checkStatus: function(response) {
    if (response.ok) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};
export { ApiUtils as default };

const BASE_URL = "https://localhost:3000/api/v1/";

export class Api {  
  constructor() {
  }
  getItems()
  {
    return fetch(BASE_URL + "properties")
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .catch(e => e)
  }
}