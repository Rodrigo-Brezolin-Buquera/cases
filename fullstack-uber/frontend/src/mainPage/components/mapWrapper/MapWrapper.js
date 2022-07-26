import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "../map/Map";
import { Marker } from "../marker/Marker";

export const MapWrapper = () => {

    const center = { lat: -23.480480, lng: -47.448575 }
    const zoom = 14


    return (
        <Wrapper apiKey={process.env.REACT_APP_API_KEY}>
            <Map center={center} zoom={zoom} >
                <Marker position={center}/>
            </Map>
        </Wrapper>
    )
}


