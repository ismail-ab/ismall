import * as React from 'react';
import { Coords } from 'google-map-react';

interface IMarkerOwnProps extends Coords {
  onMarkerClick: Function;
  isSelected: boolean;
  id: string;
}

class Marker extends React.Component<IMarkerOwnProps> {
  render() {
    const {
      onMarkerClick,
      isSelected,
      id
    } = this.props;

    return (
      <button
        style={{
          height: '25px',
          width: '25px',
          borderRadius: '50%',
          display: 'inline-block',
          backgroundColor: isSelected ? 'green' : 'red'
        }}
        onClick={() => onMarkerClick(id)}
      />
    );
  }
}

export default Marker;