import { Coords } from 'google-map-react';
import {
  getGooglePlacesAPIUrlWithParams,
  getGooglePlaces,
  mapGooglePlacesToPlaces
} from './helpers';
import { IPlaces } from '../../types';

const getPlaces: (coordinates: Coords) => Promise<IPlaces> = async (coordinates) => {
  const params = {
    location: `${coordinates.lat},${coordinates.lng}`,
    rankby: 'distance',
    keyword: 'micromania',
    key: process.env.REACT_APP_GOOGLE_MAP_API_KEY as string
  };

  const googlePlacesAPIUrlWithParams = getGooglePlacesAPIUrlWithParams(
    process.env.REACT_APP_GOOGLE_PLACES_URL as string,
    params
  );

  try {
    const googlePlaces = await getGooglePlaces(
      googlePlacesAPIUrlWithParams,
      coordinates
    );
    const places = mapGooglePlacesToPlaces(googlePlaces);

    return places;
  } catch (err) {
    return err;
  }
};

export default getPlaces;