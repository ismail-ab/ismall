import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { Coords } from 'google-map-react';
import {
  getCurrentPosition,
  getPlaces,
  IPlace,
  IPlaces
} from './helpers';

interface IMapState {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  places: Array<object>;
}

const AnyReactComponent = (props: { text: string; lat: number; lng: number }) => <div>{props.text}</div>;

class Map extends React.Component<{}, IMapState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 11,
      places: []
    };
  }

  async componentDidMount() {
    const coordinates: Coords = await getCurrentPosition();
    const places: IPlaces = await getPlaces(coordinates);

    this.setState({
      center: coordinates,
      places: places
    });
  }

  render() {
    const { places } = this.state;

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          center={this.state.center}
          defaultZoom={this.state.zoom}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY as string }}
        >
          {
            places.map((place: IPlace) => (
              <AnyReactComponent
                key={place.id}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
                text={place.name}
              />
            ))
          }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
