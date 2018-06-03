import { Coords } from 'google-map-react';

export interface IPlace extends Coords {
  id: string;
  name: string;
  address: string;
  isSelected: boolean;
}

export interface IPlaces extends Array<IPlace> { }