// import { MapContainer, TileLayer } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import { useState, useEffect } from 'react';
// import { Location } from 'iconsax-react';
// import { useDispatch, useSelector } from 'react-redux';

// import { addressInputValue } from '@/redux/inputSlice';

// function App() {
//   const [markers, setMarkers] = useState([]);
//   const [address, setAddress] = useState({});
//   const [listAddress, setListAddress] = useState([]);

//   const dispatch = useDispatch();
//   const addressInputVal = useSelector(state => state.input.addressInputValue);
//   console.log( 'addressInputVal', addressInputVal);
//   const [inpVal, setInpVal] = useState('');

//   // const [addressTwo, setAddressTwo] = useState({
//   //   city: '',
//   //   country: '',
//   //   country_code: '',
//   //   county: '',
//   //   district: '',
//   //   neighbourhood: '',
//   //   postcode: '',
//   //   road: '',
//   // });

//   const MapMarker = L.icon({
//     iconUrl: '../../../Location-sign.png',
//     iconSize: [48, 64], // size of the icon
//   });

//   useEffect(() => {
//     const fetchAddress = async () => {
//       // get the last marker in the markers array
//       const marker = markers[markers.length - 1];
//       if (marker) {
//         // fetch the address using a reverse geocoding API
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?lat=${
//             marker.getLatLng().lat
//           }&lon=${marker.getLatLng().lng}&format=json`,
//           {
//             headers: {
//               'accept-language': 'eng',
//             },
//           }
//         );
//         const data = await response.json();
//         // * address one set full address
//         setAddress(data);
//         console.log('data.address ----', data.address);
//         console.log('addressdisplay_name ----', address.display_name);
//         // * address two set detail
//         // console.log(data.address);
//         // setAddressTwo({
//         //   city: data.address?.city,
//         //   country: data.address?.country,
//         //   country_code: data.address?.country_code,
//         //   county: data.address?.county,
//         //   district: data.address?.district,
//         //   neighbourhood: data.address?.neighbourhood,
//         //   postcode: data.address?.postcode,
//         //   road: data.address?.road,
//         // });
//         setListAddress([...listAddress, data.display_name]);
//         // dispatch(addressInputValue(address));
//       }
//       //* list address for display on ui
//     };
//     fetchAddress();
//   }, [markers]);

//   const inputHandler = e => {
//     e.preventDefault();
//     console.log('e------------' , e.target.value);
//     console.log('e------------2' , address.display_name);
//     dispatch(addressInputValue(address.display_name));
//     // dispatch(addressInputValue(inpVal))
//     console.log( 'addressInputVal---2', addressInputVal);
//   };

//   // const reverseGeocode = async (latlng) => {
//   //   try {
//   //     const response = await fetch(
//   //       `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng[0]}&lon=${latlng[1]}`
//   //     );
//   //     const data = await response.json();
//   //     setAddress(data.display_name);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   return (
//     <section className='h-full relative'>
//       {/* show addres two with detail */}
//       {/* <div>
//         <p>country : {addressTwo.country}</p>
//         <p>code :{addressTwo.country_code}</p>
//         <p>county : {addressTwo.county}</p>
//         <p>district : {addressTwo.district}</p>
//         <p>neighbourhood : {addressTwo.neighbourhood}</p>
//         <p>postcode : {addressTwo.postcode}</p>
//         <p>road :{addressTwo.road}</p>
//       </div> */}

//       {/* show addres one full address */}
//       {/* <div className='bg-red-200'>
//         <p className='text-sm' >{address.display_name}</p>
//       </div> */}

//       {/* maping address */}
//       {/* {listAddress.map((address, index) => {
//         return (
//           <p className='absolute text-sm' key={index}>
//             {address}
//           </p>
//         );
//       })} */}

//       {/* map */}
//       <div className='h-full flex justify-center items-center relative'>
//         <MapContainer
//           style={{ height: '100%', width: ' 100%' }}
//           center={[35.715298,  51.404343]}
//           zoom={13}
//           scrollWheelZoom={false}
//           whenReady={map => {
//             map.target.on('click', function (e) {
//               const { lat, lng } = e.latlng;
//               console.log({ lat: lat, lng: lng });
//               // * here added icon to map with click
//               const newMarker = L.marker([lat, lng], {
//                 icon: MapMarker,
//               }).addTo(map.target);

//               //* here controll icon with state  just show one time
//               setMarkers(prevMarkers => {
//                 // Keep only the last 1 marker
//                 const newMarkers = [...prevMarkers, newMarker];
//                 if (newMarkers.length > 1) {
//                   const oldestMarker = newMarkers.shift();
//                   oldestMarker.remove();
//                 }
//                 return newMarkers;
//               });
//             });
//           }}>
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//           />
//           {/* Show the address on the map */}
//         </MapContainer>

//         <form
//           onSubmit={inputHandler}
//           className='absolute z-[9999] top-[60%]  w-full text-gray-800 px-6'>
//           <div className='relative w-full '>
//             <input
//               className='body-sm w-full h-8 px-4 pr-10 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary text-right'
//               type='text'
//               placeholder='آدرس'
//               dir='rtl'
//               // value={inpVal}
//               value={address.display_name}
//               // onChange={(e) => dispatch(addressInputValue(address.display_name))}
//               onChange={e => setAddress({ display_name: e.target.value })}
//               onBlur={(event) => dispatch(addressInputValue(event.target.value))}
//             />
//             <div className='absolute top-0 right-0 z-10 flex items-center h-8 px-4'>
//               <Location color='#717171' />
//             </div>
//           </div>

//           <button
//             type='submit'
//             className='absolute -bottom-12 left-1/2 -translate-x-1/2 z-[9999] caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4 lg:px-8'>
//             ثبت موقعیت
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default App;

import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useState, useEffect, useRef } from 'react';
import { Location } from 'iconsax-react';
import { useDispatch, useSelector } from 'react-redux';

import { addressInputValue } from '@/redux/inputSlice';

function App() {
  const [markers, setMarkers] = useState([]);
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const addressInputVal = useSelector(state => state.input.addressInputValue);
  console.log('addressInputVal', addressInputVal);
  console.log('address', address);

  const MapMarker = L.icon({
    iconUrl: '../../../Location-sign.png',
    iconSize: [48, 64], // size of the icon
  });

  useEffect(() => {
    const fetchAddress = async () => {
      const marker = markers[markers.length - 1];
      if (marker) {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${
            marker.getLatLng().lat
          }&lon=${marker.getLatLng().lng}&format=json`,
          {
            headers: {
              'accept-language': 'eng',
            },
          }
        );
        const data = await response.json();
        setAddress(data.display_name);
        // dispatch(addressInputValue(address));
      }
    };
    fetchAddress();
  }, [markers]);

  const inputHandler = e => {
    e.preventDefault(); // prevent form submission
    geocodeAddress(address); // geocode the entered address
    dispatch(addressInputValue(address));
  };

  const geocodeAddress = async address => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setMarkers([L.marker([lat, lon], { icon: MapMarker })]);
        setAddress(data[0].display_name);
        mapRef.current.setView([lat, lon], 13); // set the center of the map to the geocoded coordinates
        dispatch(addressInputValue(address));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const mapRef = useRef(null);

  return (
    <section className='h-full relative'>
      <div className='h-full flex justify-center items-center relative'>
        <MapContainer
          ref={mapRef}
          style={{ height: '100%', width: ' 100%' }}
          center={[29.591768, 52.583698]}
          zoom={13}
          scrollWheelZoom={true}
          whenReady={map => {
            map.target.on('click', function (e) {
              const { lat, lng } = e.latlng;
              // console.log({ lat: lat, lng: lng });
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
        </MapContainer>

        <form
          onSubmit={inputHandler}
          className='absolute z-[9999] top-[60%]  w-full text-gray-800 px-6'>
          <div className='relative w-full '>
            <input
              className='body-sm w-full h-8 px-4 pr-10 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary text-right'
              type='text'
              placeholder='آدرس'
              dir='rtl'
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <div className='absolute top-0 right-0 z-10 flex items-center h-8 px-4'>
              <Location color='#717171' />
            </div>
          </div>

          <button
            type='submit'
            className='absolute -bottom-12 left-1/2 -translate-x-1/2 z-[9999] caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4 lg:px-8'>
            جستجو
          </button>
        </form>
      </div>
    </section>
  );
}

export default App;
