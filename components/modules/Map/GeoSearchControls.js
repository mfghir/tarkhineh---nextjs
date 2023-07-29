import { useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function GeoSearchControls({ map }) {
  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: 'button',
      autoClose: true,
      searchLabel: 'Enter address or place name...',
      showMarker: true,
      autoComplete: true,
      autoCompleteDelay: 250,
      autoCloseAfterSearch: true,
      keepResult: true,
    });
    map?.addControl(searchControl);
  }, [map]);

  return null;
}

export default GeoSearchControls;
