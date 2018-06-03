import { IURLParams } from './types';

const getGooglePlacesAPIUrlWithParams: (url: string, params: IURLParams) => string = (url, params) => {
  const encodedURI = encodeURIComponent;
  const urlParams = Object
    .keys(params)
    .map(param => `${encodedURI(param)}=${encodedURI(params[param])}`)
    .join('&');

  return url + urlParams;
};

export default getGooglePlacesAPIUrlWithParams;