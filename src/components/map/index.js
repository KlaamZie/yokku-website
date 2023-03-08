import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export const MapContainer = (props) => {
  const onMarkerClick = (e) => {
    console.log(e)
  }
  return (
    <Map 
      google={props.google} 
      zoom={14}
      initialCenter={{
          lat: 43.610140,
          lng: 3.913300
      }}
    >

      <Marker onClick={onMarkerClick}
              name={'Current location'} />
    </Map>
  );
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBmyBbJQdwJv2CWD1H6fDkiDMgkIQaPvpE")
})(MapContainer)