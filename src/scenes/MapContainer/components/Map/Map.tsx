import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { Coords } from 'google-map-react';
import {
  getCurrentPosition,
  getPlaces,
  IPlace,
  IPlaces
} from './helpers';
import { Marker } from './components';

interface IMapState {
  center: Coords;
  zoom: number;
  places: Array<object>;
}

class Map extends React.Component<{}, IMapState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 11,
      places: [],
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  async componentDidMount() {
    const coordinates: Coords = await getCurrentPosition();
    const places: IPlaces = await getPlaces(coordinates);

    this.setState({
      center: coordinates,
      places: places
    });
  }

  onMarkerClick(markerPlaceId: string) {
    const places: IPlaces = this.state.places.map((place: IPlace) => place.id !== markerPlaceId ?
      place
      : {
        ...place,
        isSelected: !place.isSelected
      });

    this.setState({
      places
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
              <Marker
                {...place}
                key={place.id}
                onMarkerClick={this.onMarkerClick}
              />
            ))
          }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
