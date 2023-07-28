import { useState, useEffect, useRef } from 'react';
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
import L from 'leaflet';
export default function MapPage() {
  const [latLng, setLatLng] = useState([35.688813637611936, 51.38913492599499]);
  const [searchText, setSearchText] = useState('');
  const markerRef = useRef(null);

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

  useEffect(() => {
    if (markerRef.current) {
      const { lat, lng } = markerRef.current.leafletElement.getLatLng();
      setLatLng([lat, lng]);
    }
  }, [markerRef]);

  return (
    <section style={{ height: '100%', width: '100%' }}>
      <MapContainer
        whenReady={map => {
          map.target.on('click', function (e) {
            const { lat, lng } = e.latlng;
            console.log(lat, lng);
            setLatLng([lat, lng]);
          });
        }}
        center={latLng}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}>
        <TileLayer url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
        <MyMarker
          position={latLng}
          setLatLng={setLatLng}
          markerRef={markerRef}
        />
        {/* <MapEventsHandler /> */}
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
      // Do nothing
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
      onDragEnd={handleDragEnd}
      ref={props.markerRef}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}
