import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%',
}

export class GoogleMaps extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          // 25.766241, -80.196099
          lat: 25.766241,
          lng: -80.196099,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={'Miami International Airport'} />
        <Marker position ={{lat: 25.769241,lng: -80.199099 } }onClick={this.onMarkerClick} name={'Test'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4 className='map-text'>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSM6gvLt0YVPtpeqWQm3JNNXQ332_uMXQ',
})(GoogleMaps)
