// import { Location } from 'iconsax-react'
// import { useCallback, useMemo, useRef, useState } from 'react'
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

// import 'leaflet/dist/leaflet.css';


// export default function Map() {
//   const center = {
//     lat: 51.505,
//     lng: -0.09,
//   }
  
//   function DraggableMarker() {
//     const [draggable, setDraggable] = useState(false)
//     const [position, setPosition] = useState(center)
//     const markerRef = useRef(null)
//     const eventHandlers = useMemo(
//       () => ({
//         dragend() {
//           const marker = markerRef.current
//           if (marker != null) {
//             setPosition(marker.getLatLng())
//           }
//         },
//       }),
//       [],
//     )
//     const toggleDraggable = useCallback(() => {
//       setDraggable((d) => !d)
//     }, [])
  
//     return (
//       <Marker
//         draggable={draggable}
//         eventHandlers={eventHandlers}
//         position={position}
//         ref={markerRef}>
//         <Popup minWidth={90}>
//           <span onClick={toggleDraggable}>
//             {draggable
//               ? 'Marker is draggable'
//               : 'Click here to make marker draggable'}
//           </span>
//         </Popup>
//       </Marker>
//     )
//   }

//   return (
//     <div className='bg-green-300 relative'>

// <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <DraggableMarker />
//   </MapContainer>


//     {/* <form  className='absolute top-3/4 z-50  w-full  text-gray-800'>
//       <input
//         type='text'
//         placeholder='جستجو'
//         className={`w-full h-8 border mx-5 focus:border-primary outline-none px-4 py-2 absolute rounded placeholder:text-gray-800 caption-sm`}
//         // defaultValue={position}
//         // onChange={handleChange}
//         // onKeyPress={handleKeyPress}
//       />

//       <button type='submit' className='absolute top-2 right-4'>
//         <Location size='16' />
//       </button>
//     </form> */}

//     </div>

//   )
// }



// import {  useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// export default function MapPage() {
//   const [latLng, setLatLng] = useState([35.715298, 51.404343]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLatLng((prevLatLng) => ({
//       ...prevLatLng,
//       [name]: parseFloat(value),
//     }));
//   };

//   return (
//     <>
//       <input
//         type="number"
//         name="lat"
//         value={latLng.lat}
//         onChange={handleInputChange}
//       />
//       <input
//         type="number"
//         name="lng"
//         value={latLng.lng}
//         onChange={handleInputChange}
//       />
//       <MapContainer
//         center={latLng}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker  position={latLng}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </>
//   );
// };


















// import { useState } from 'react';
// import {  TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// export default function MapPage() {
//   const [latLng, setLatLng] = useState([35.715298, 51.404343]);


//   return (
//     <>
    
//       <MapContainer
//         center={latLng}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker  position={latLng}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </>
//   );
// };





// import React, { useEffect, useState } from 'react'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import L from 'leaflet'

// // import 'leaflet/dist/leaflet.css';


// const Map = () => {
//   const [position, setPosition] = useState([0, 0])
//   const [address, setAddress] = useState('')

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setPosition([position.coords.latitude, position.coords.longitude])
//         reverseGeocode([position.coords.latitude, position.coords.longitude])
//       },
//       (error) => console.error(error),
//       { enableHighAccuracy: true }
//     )
//   }, [])

//   const reverseGeocode = async (latlng) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng[0]}&lon=${latlng[1]}`
//       )
//       const data = await response.json()
//       setAddress(data.display_name)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const markerIcon = new L.Icon({
//     iconUrl: '/leaflet/marker-icon.png',
//     iconRetinaUrl: '/leaflet/marker-icon-2x.png',
//     shadowUrl: '/leaflet/marker-shadow.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     tooltipAnchor: [16, -28],
//     shadowSize: [41, 41],
//   })

//   const handleMarkerDragEnd = (event) => {
//     const marker = event.target
//     const position = marker.getLatLng()
//     setPosition([position.lat, position.lng])
//     reverseGeocode([position.lat, position.lng])
//   }

//   return (
//     <div>
//       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker position={position} draggable={true} icon={markerIcon} onDragEnd={handleMarkerDragEnd}>
//           <Popup>You are here!</Popup>
//         </Marker>
//       </MapContainer>
//       <input className='border border-gray-400' type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
//     </div>
//   )
// }

// export default Map




// import 'leaflet/dist/leaflet.css';

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














// import 'leaflet/dist/leaflet.css'
// import { MapContainer, TileLayer } from 'react-leaflet'

// function Map() {
//     return ( 
//         <MapContainer className='' center={[12.505, -10.09]} zoom={15} scrollWheelZoom={true}>
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="http://127.0.0.1:8000/tiles/{z}/{x}/{y}.png"
//             />
//         </MapContainer>
//      );
// }

// export default Map;



// import { useState } from 'react';
// import 'leaflet/dist/leaflet.css'

// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMapEvents,
// } from 'react-leaflet';
// import 'leaflet-defaulticon-compatibility';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// export default function MapPage() {
//   const [latLng, setLatLng] = useState([35.715298, 51.404343]);

//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setLatLng(prevLatLng => ({
//       ...prevLatLng,
//       [name]: parseFloat(value),
//     }));
//   };

//   function MapClickHandler(e) {
//     setLatLng([e.latlng.lat, e.latlng.lng]);
//   }

//   return (
//     <MapContainer
//       center={latLng}
//       zoom={13}
//       scrollWheelZoom={false}
//       style={{ height: '100%', width: '100%' }}>
//       <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
//       <MyMarker position={latLng} setLatLng={setLatLng} />

//       <input
//         type='number'
//         name='lat'
//         value={latLng[0]}
//         onChange={handleInputChange}
//       />
//       <input
//         type='number'
//         name='lng'
//         value={latLng[1]}
//         onChange={handleInputChange}
//       />

//       <MapEventsHandler onClick={MapClickHandler} />
//     </MapContainer>
//   );
// }

// function MapEventsHandler(props) {
//   const map = useMapEvents({
//     click: e => {
//       props.onClick(e);
//     },
//   });

//   return null;
// }

// function MyMarker(props) {
//   console.log(props.position);
//   function handleDragEnd(e) {
//     const test = props.setLatLng([e.target._latlng.lat, e.target._latlng.lng]);
//     console.log('latLng', e.target._latlng.lat, e.target._latlng.lng);
//   }

//   return (
//     <Marker
//       position={props.position}
//       draggable={true}
//       onDragEnd={handleDragEnd}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   );
// }