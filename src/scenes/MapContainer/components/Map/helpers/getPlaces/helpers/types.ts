import { Coords } from 'google-map-react';

export interface IURLParams {
  location: string;
  rankby: string;
  keyword: string;
  key: string;
}

export interface IGooglePlace {
  id: string;
  geometry: {
    location: Coords;
  };
  name: string;
  vicinity: string;
}

export interface IGooglePlaces extends Array<IGooglePlace> { }