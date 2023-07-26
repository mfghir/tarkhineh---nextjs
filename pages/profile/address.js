import AddressPage from '@/components/templates/userProfile/AddressPage';

const Address = () => {
  return <AddressPage />;
};

export default Address;



// export async function getServerSideProps() {
//   // Fetch the user's current location on the server
//   const ipApiUrl = 'https://ipapi.co/json/';
//   const response = await fetch(ipApiUrl);
//   const data = await response.json();
//   const { latitude, longitude } = data;
//   const reverseGeocodeUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`;
//   const reverseGeocodeResponse = await fetch(reverseGeocodeUrl);
//   const reverseGeocodeData = await reverseGeocodeResponse.json();
//   const initialAddress = reverseGeocodeData.display_name;

//   return {
//     props: {
//       initialAddress,
//     },
//   };
// }