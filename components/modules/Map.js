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



import {  useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapPage() {
  const [latLng, setLatLng] = useState([35.715298, 51.404343]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLatLng((prevLatLng) => ({
      ...prevLatLng,
      [name]: parseFloat(value),
    }));
  };

  return (
    <>
      <input
        type="number"
        name="lat"
        value={latLng.lat}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="lng"
        value={latLng.lng}
        onChange={handleInputChange}
      />
      <MapContainer
        center={latLng}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker  position={latLng}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};


















// import { useState } from 'react';
// import {  TileLayer, Marker, Popup } from 'react-leaflet';
// import dynamic from 'next/dynamic';

// const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), {
//   ssr: false,
// });

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









