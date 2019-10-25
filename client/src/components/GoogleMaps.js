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
    console.log('in map')
    return (
      <div>
      <h1 className='align-center'>Dog friendly places in Miami</h1>
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
        <Marker onClick={this.onMarkerClick} name={'Biscayne Dog Park'} />
        <Marker position ={{lat: 25.769241,lng: -80.199099 } }onClick={this.onMarkerClick} name={'Bark Park'} />
        <Marker position ={{lat: 25.779241,lng: -80.194099 } }onClick={this.onMarkerClick} name={'Cafe Poodle'} />
        <Marker position ={{lat: 25.769391,lng: -80.191299 } }onClick={this.onMarkerClick} name={"Pawz 'n Bonez"} />
        <Marker position ={{lat: 25.776191,lng: -80.199099 } }onClick={this.onMarkerClick} name={'Pet Resort'} />
        <Marker position ={{lat: 25.779241,lng: -80.194099 } }onClick={this.onMarkerClick} name={'Doggy Motel'} />
        <Marker position ={{lat: 25.759241,lng: -80.209999 } }onClick={this.onMarkerClick} name={'Fluffy Love'} />
        <Marker position ={{lat: 25.779241,lng: -80.249999 } }onClick={this.onMarkerClick} name={'Puppies and Paws'} />
        <Marker position ={{lat: 25.729241,lng: -80.279999 } }onClick={this.onMarkerClick} name={'Brickell Dog Park'} />

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
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSM6gvLt0YVPtpeqWQm3JNNXQ332_uMXQ',
})(GoogleMaps)
