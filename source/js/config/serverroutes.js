function getServerApi(selectid) {
  
  switch (selectid) {
      case 'register': {
        return '/users/register';
      }
      case 'login': {
        return '/users/login';
      }
      case 'initialrole': {
        return '/list-authentication';
      }
      case 'createrole': {
        return '/createrole';
      }
      case 'editrole': {
        return '/editrole';
      }
      
    }
  return '';
}

export default {
  getServerApi,
};