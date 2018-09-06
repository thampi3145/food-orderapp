

export const GET_HeaderDetails_START = 'GET_HeaderDetails_START';
export const GET_HeaderDetails_ERROR = 'GET_HeaderDetails_ERROR';
export const GET_HeaderDetails_SUCCESS = 'GET_HeaderDetails_SUCCESS';


export function getHeaderDetails(selectid) {

  
  
  return {
    type: GET_HeaderDetails_START,
    select_id: selectid,
  };
}
