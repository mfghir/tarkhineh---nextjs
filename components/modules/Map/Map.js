import { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';

export default function MapPage() {
  const [latLng, setLatLng] = useState([35.715298, 51.404343]);
  const [searchText, setSearchText] = useState('');

  const handleInputChange = e => {
    const { value } = e.target;
    setSearchText(value);
  };

  useEffect(() => {
    if (searchText) {
      const provider = new OpenStreetMapProvider();
      provider
        .search({ query: searchText })
        .then(results => {
          if (results.length > 0) {
            const { y, x } = results[0];
            setLatLng([y, x]);
          }
        })
        .catch(error => {
          console.error('Error while geocoding:', error);
        });
    }
  }, [searchText]);

  function MapClickHandler(e) {
    setLatLng([e.latlng.lat, e.latlng.lng]);
  }

  return (
    <section style={{ height: '100%', width: '100%' }}>
      <MapContainer
        center={latLng}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <MyMarker position={latLng} setLatLng={setLatLng} />

        <MapEventsHandler onClick={MapClickHandler} />
      </MapContainer>
      <input
        style={{ position: 'fixed', zIndex: '999999', top: '0px' }}
        type='text'
        value={searchText}
        onChange={handleInputChange}
        placeholder='Search location...'
      />
    </section>
  );
}

function MapEventsHandler(props) {
  const map = useMapEvents({
    click: e => {
      props.onClick(e);
    },
  });

  return null;
}

function MyMarker(props) {
  function handleDragEnd(e) {
    const { lat, lng } = e.target.getLatLng();
    props.setLatLng([lat, lng]);
  }

  return (
    <Marker
      position={props.position}
      draggable={true}
      onDragEnd={handleDragEnd}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}
