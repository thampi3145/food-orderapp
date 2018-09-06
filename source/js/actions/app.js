

export const GET_InitialDetails_START = 'GET_InitialDetails_START';
export const GET_InitialDetails_ERROR = 'GET_InitialDetails_ERROR';
export const GET_InitialDetails_SUCCESS = 'GET_InitialDetails_SUCCESS';


export function getInitialDetails(domainName) {

  
  
  return {
    type: GET_InitialDetails_START,
    domain: domainName,
  };
}
