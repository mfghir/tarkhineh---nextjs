import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useState, useEffect } from 'react';
import { Location } from 'iconsax-react';
import { toPersianChars } from '@persian-tools/persian-tools';

function App() {
  const [markers, setMarkers] = useState([]);
  const [address, setAddress] = useState({});
  // const farsiDisplayName = toPersianChars(address.display_name);
  // console.log('farsiDisplayName', farsiDisplayName);

  // const [addressTwo, setAddressTwo] = useState({
  //   city: '',
  //   country: '',
  //   country_code: '',
  //   county: '',
  //   district: '',
  //   neighbourhood: '',
  //   postcode: '',
  //   road: '',
  // });

  const [listAddress, setListAddress] = useState([]);

  const MapMarker = L.icon({
    iconUrl: '../../../Location-sign.png',
    iconSize: [48, 64], // size of the icon
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
        // console.log(data.address);
        // setAddressTwo({
        //   city: data.address?.city,
        //   country: data.address?.country,
        //   country_code: data.address?.country_code,
        //   county: data.address?.county,
        //   district: data.address?.district,
        //   neighbourhood: data.address?.neighbourhood,
        //   postcode: data.address?.postcode,
        //   road: data.address?.road,
        // });

        setListAddress([...listAddress, data.display_name]);
        console.log(listAddress, 'list address user');
      }
      //* list address for display on ui
    };
    fetchAddress();
  }, [markers]);

  const [farsiDisplayName, setFarsiDisplayName] = useState('');
  console.log('farsiDisplayName-------_____________', farsiDisplayName);

  // useEffect(() => {
  //   if (address.display_name) {
  //     setFarsiDisplayName(toPersianChars(address.display_name));
  //   }
  // }, [address.display_name]);

  console.log('address.display_name-------', address.display_name);
  console.log('list address user ---------', listAddress);


  // const reverseGeocode = async (latlng) => {
  //   try {
  //     const response = await fetch(
  //       `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng[0]}&lon=${latlng[1]}`
  //     );
  //     const data = await response.json();
  //     setAddress(data.display_name);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  return (
    <section className='h-full relative'>
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
      {/* <div className='bg-red-200'>
        <p className='text-sm' >{address.display_name}</p>
      </div> */}

      {/* maping address */}
      {/* {listAddress.map((address, index) => {
        return (
          <p className='absolute text-sm' key={index}>
            {address}
          </p>
        );
      })} */}

      {/* map */}
      <div className='h-full flex justify-center items-center relative'>
        <MapContainer
          style={{ height: '100%', width: ' 100%' }}
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
                icon: MapMarker,
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

        <form className='absolute z-[9999] top-[60%]  w-full text-gray-800 px-6'>
          <div className='relative w-full '>
            <input
              className='body-sm w-full h-8 px-4 pr-10 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary text-right'
              type='text'
              placeholder='آدرس'
              dir='rtl'
              value={address.display_name}
              // onChange={(event) => setAddress(event.target.value)}
              // onBlur={(event) => geocodeAddress(event.target.value)}
            />
            <div className='absolute top-0 right-0 z-10 flex items-center h-8 px-4'>
              <Location color='#717171' />
            </div>
          </div>
        </form>

        <button className='absolute bottom-6 left-1/2 -translate-x-1/2 z-[9999] caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4 lg:px-8'>
          ثبت موقعیت
        </button>
      </div>
    </section>
  );
}

export default App;
