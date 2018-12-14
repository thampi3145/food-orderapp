export const GET_GirabuyDetails_START = 'GET_GirabuyDetails_START';
export const GET_GirabuyDetails_ERROR = 'GET_GirabuyDetails_ERROR';
export const GET_GirabuyDetails_SUCCESS = 'GET_GirabuyDetails_SUCCESS';

export function getGirabuy(formdata) {
  return {
    type: GET_GirabuyDetails_START,
    form_data: formdata,
  };
}