import { Coords } from 'google-map-react';
import { IGooglePlaces } from './types';

const getGooglePlaces: (url: string, coordinates: Coords) => Promise<IGooglePlaces> = async (url, coordinates) => {
  try {
    const urlWithProxy = `${process.env.REACT_APP_PROXY_URL as string}${url}`;
    const response = await fetch(urlWithProxy);
    const { results } = await response.json();

    return results;
  } catch (err) {
    return err;
  }
};

export default getGooglePlaces;