import { Coords } from 'google-map-react';

interface IGeolocationPositionAPI {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const getCurrentPosition: () => Promise<Coords> = () => {
  try {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition((position: IGeolocationPositionAPI) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    });
  } catch (err) {
    return err;
  }
};

export default getCurrentPosition;