import jwtDecode from 'jwt-decode';

const clearLocalStorage = () => {
  localStorage.removeItem('zpt');
};

function isAuthenticated(token) {
  if (!token) {
    return false;
  }
  try {
    const decodedToken = jwtDecode(token, { header: true });
    console.log(decodedToken);
    const expirationTime = (decodedToken).exp * 1000;

    if (Date.now() >= expirationTime) {
      clearLocalStorage();
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Error verifying jwt token: ${error}`);
    clearLocalStorage();
    return false;
  }
}

export default isAuthenticated;