// Import react's components
import {styled} from 'styled-components'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: "100%",
    height: "400px"
  };
  
  const center = {
    lat: 0.32260004149798827,
    lng: 9.502244909835715
  };

function Map() {
    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap></LoadScript>
    )
}


export default Map