export const constants={
    CURRENT_TOKEN:'CURRENT_TOKEN'
};

const BaseURL='https://localhost:7151/api/Users/login';

export const apiEndpoint = {
    AuthEndpoint: {
      login: `${BaseURL}`,
      logout: `${BaseURL}`,
      loggedUser: `${BaseURL}`,
    }
};