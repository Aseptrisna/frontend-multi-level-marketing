export function authHeader() {
    const token = localStorage.getItem("Token");
    if (token !== null) {
      return { 'x-access-token': token }
    } else {
      return {}
    }
  }

  export function getToken() {
    const token = localStorage.getItem("Token");
    if (token !== null) {
      return token;
    } else {
      return token;
    }
  }