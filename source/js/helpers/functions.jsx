import _ from 'lodash';

export function Url_StringfyParam(search) {
    return _.chain(search)
  .replace('?', '') 
  .split('&') 
  .map(_.partial(_.split, _, '=', 2))
  .fromPairs() 
  .value();
}