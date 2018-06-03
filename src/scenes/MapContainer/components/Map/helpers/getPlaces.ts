import { Coords } from 'google-map-react';
import { IPlaces } from './';

interface IParams {
  location: string;
  rankby: string;
  keyword: string;
  key: string;
}

const getUrlWithParams: (url: string, params: IParams) => string = (url, params) => {
  const encodedURI = encodeURIComponent;
  const urlParams = Object.keys(params)
    .map(k => `${encodedURI(k)}=${encodedURI(params[k])}`)
    .join('&');

  return url + urlParams;
};

const getPlaces: (coordinates: Coords) => Promise<IPlaces> = async (coordinates) => {
  const params = {
    location: `${coordinates.lat},${coordinates.lng}`,
    rankby: 'distance',
    keyword: 'micromania',
    key: process.env.REACT_APP_GOOGLE_MAP_API_KEY as string
  };

  const urlWithParams = getUrlWithParams(process.env.REACT_APP_GOOGLE_PLACES_URL as string, params);

  try {
    const urlWithProxy = `${process.env.REACT_APP_PROXY_URL as string}${urlWithParams}`;
    const response = await fetch(urlWithProxy);

    const { results } = await response.json();

    return results;
  } catch (err) {
    return err;
  }
};

export default getPlaces;