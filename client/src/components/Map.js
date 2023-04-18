import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "need a key"
    })

    const containerStyle = {
        width: '100%',
        height: '600px'
    };

    const center = {
        lat: 55.676098,
        lng: 12.568337
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
        >
            <></>
        </GoogleMap>
    ) : <></>
}

export default Map