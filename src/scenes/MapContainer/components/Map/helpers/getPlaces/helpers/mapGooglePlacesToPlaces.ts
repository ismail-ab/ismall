import {
  IGooglePlace,
  IGooglePlaces
} from './types';
import {
  IPlace,
  IPlaces
} from '../../../types';

const mapGooglePlacesToPlaces: (googlePlaces: IGooglePlaces) => IPlaces = (googlePlaces) => googlePlaces.map(
  (googlePlace: IGooglePlace) => {
    const place: IPlace = {
      id: googlePlace.id,
      name: googlePlace.name,
      address: googlePlace.vicinity,
      lng: googlePlace.geometry.location.lng,
      lat: googlePlace.geometry.location.lat,
      isSelected: false
    };

    return place;
  }
);

export default mapGooglePlacesToPlaces;