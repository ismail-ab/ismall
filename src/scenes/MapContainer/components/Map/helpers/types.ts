import { Coords } from 'google-map-react';

export interface IPlace {
  id: string;
  geometry: {
    location: Coords;
  };
  name: string;
  vicinity: string;
}

export interface IPlaces extends Array<IPlace> { }