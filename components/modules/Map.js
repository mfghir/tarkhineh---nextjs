import React, { useState } from "react";
import requests from "requests";
import { format } from "format-js";

const Map = () => {
  const [address, setAddress] = useState("");

  const getAddressFromMap = (latitude, longitude) => {
    const url = format(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
      { latitude, longitude }
    );
    const response = requests.get(url);
    if (response.status_code == 200) {
      const data = response.json();
      setAddress(data["address"]["display_name"]);
    } else {
      setAddress("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your address"
        onChange={(event) => getAddressFromMap(event.target.value)}
        value={address}
      />
    </div>
  );
};

export default Map;
