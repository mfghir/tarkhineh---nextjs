// import './App.css';
import style from './map.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';

function App() {
  const [markers, setMarkers] = useState([]);
  const [address, setAddress] = useState({});
  const [addressTwo, setAddressTwo] = useState({
    city: '',
    country: '',
    country_code: '',
    county: '',
    district: '',
    neighbourhood: '',
    postcode: '',
    road: '',
  });

  const [listAddress, setListAddress] = useState([]);

  const Dimoned = L.icon({
    iconUrl: '../../../marker1.png',
    iconSize: [50, 50], // size of the icon
  });

  useEffect(() => {
    const fetchAddress = async () => {
      // get the last marker in the markers array
      const marker = markers[markers.length - 1];
      if (marker) {
        // fetch the address using a reverse geocoding API
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${
            marker.getLatLng().lat
          }&lon=${marker.getLatLng().lng}&format=json`
        );
        const data = await response.json();
        console.log(data, 'DATA IS RESPOMSE FETCH ADDRESS');
        // * address one set full address
        setAddress(data);
        // * address two set detail
        console.log(data.address);
        setAddressTwo({
          city: data.address.city,
          country: data.address.country,
          country_code: data.address.country_code,
          county: data.address.county,
          district: data.address.district,
          neighbourhood: data.address.neighbourhood,
          postcode: data.address.postcode,
          road: data.address.road,
        });

        setListAddress([...listAddress, data.display_name]);
        console.log(listAddress, 'list address user');
      }
      //* list address for display on ui
    };
    fetchAddress();
  }, [markers]);
  console.log(address.display_name);
  console.log(listAddress, 'list address user');
  return (
    <section>
      {/* show addres two with detail */}
      {/* <div>
        <p>country : {addressTwo.country}</p>
        <p>code :{addressTwo.country_code}</p>
        <p>county : {addressTwo.county}</p>
        <p>district : {addressTwo.district}</p>
        <p>neighbourhood : {addressTwo.neighbourhood}</p>
        <p>postcode : {addressTwo.postcode}</p>
        <p>road :{addressTwo.road}</p>
      </div> */}
      {/* show addres one full address */}

      <div>
        <h1>{address.display_name}</h1>
      </div>

      {/* maping address */}
      {listAddress.map((address, index) => {
        return <p key={index}>{address}</p>;
      })}
      {/* map */}
      <div className={style.map}>
        <MapContainer
          style={{ height: '100vh', width: ' 100%' }}
          center={[29.591768, 52.583698]}
          zoom={13}
          scrollWheelZoom={false}
          whenReady={map => {
            // * this function for click on map
            map.target.on('click', function (e) {
              const { lat, lng } = e.latlng;
              console.log({ lat: lat, lng: lng });
              // * here added icon to map with click
              const newMarker = L.marker([lat, lng], {
                icon: Dimoned,
              }).addTo(map.target);

              //* here controll icon with state  just show one time
              setMarkers(prevMarkers => {
                // Keep only the last 1 marker
                const newMarkers = [...prevMarkers, newMarker];
                if (newMarkers.length > 1) {
                  const oldestMarker = newMarkers.shift();
                  oldestMarker.remove();
                }
                return newMarkers;
              });
            });
          }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {/* Show the address on the map */}
        </MapContainer>
      </div>
    </section>
  );
}

export default App;

// { address && (
//   <L.Popup position={markers[markers.length - 1].getLatLng()}>
//     {/* {address} */}
//   </L.Popup>
// )}
