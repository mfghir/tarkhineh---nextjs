import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

const Map = () => {
  const getAddress = (latitude, longitude) => {
    const geocoder = new google.maps.Geocoder();
    const address = geocoder.geocode({ lat: latitude, lng: longitude }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        return results[0].formatted_address;
      } else {
        return "";
      }
    });
    return address;
  };

  const [address, setAddress] = React.useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setAddress(value);
  };

  return (
    <div>
      <GoogleMap
        zoom={10}
        center={[37.774929, -122.419418]}
      >
        <Marker
          position={[37.774929, -122.419418]}
          label="Your Location"
        />
      </GoogleMap>
      <input
      className=""
        type="text"
        placeholder="Enter your address"
        onChange={handleChange}
        value={address}
      />
    </div>
  );
};

export default Map;
