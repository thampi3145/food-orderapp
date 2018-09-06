

export const GET_SliderDetails_START = 'GET_SliderDetails_START';
export const GET_SliderDetails_ERROR = 'GET_SliderDetails_ERROR';
export const GET_SliderDetails_SUCCESS = 'GET_SliderDetails_SUCCESS';


export function getSliderDetails(selectid) {

  
  
  return {
    type: GET_SliderDetails_START,
    select_id: selectid,
  };
}
