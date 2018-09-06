

export const GET_HtmlRenderDetails_START = 'GET_HtmlRenderDetails_START';
export const GET_HtmlRenderDetails_ERROR = 'GET_HtmlRenderDetails_ERROR';
export const GET_HtmlRenderDetails_SUCCESS = 'GET_HtmlRenderDetails_SUCCESS';


export function getHtmlRenderDetails(selectid,dynamicProps) {

  
  
  return {
    type: GET_HtmlRenderDetails_START,
    select_id: selectid,
    dynamicProps: dynamicProps,
  };
}

