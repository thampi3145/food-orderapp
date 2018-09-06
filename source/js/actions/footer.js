

export const GET_FooterDetails_START = 'GET_FooterDetails_START';
export const GET_FooterDetails_ERROR = 'GET_FooterDetails_ERROR';
export const GET_FooterDetails_SUCCESS = 'GET_FooterDetails_SUCCESS';


export function getFooterDetails(selectid) {

  
  
  return {
    type: GET_FooterDetails_START,
    select_id: selectid,
  };
}
