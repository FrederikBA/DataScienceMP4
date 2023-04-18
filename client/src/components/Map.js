import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import apiUtils from "../utils/apiUtils"
import { useState, useEffect } from "react"

const Map = () => {
    const [companies, setCompanies] = useState([{}]);

    const URL = apiUtils.getUrl()
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const containerStyle = {
        width: '100%',
        height: '600px'
    };

    const center = {
        lat: 55.676098,
        lng: 12.568337
    };

    useEffect(() => {
        const getCompanies = async () => {
            const response = await apiUtils.getAxios().get(URL + '/geodata')
            setCompanies(response.data)
        }
        getCompanies()
    }, [URL]);



    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
        >
            {companies.map((c) => (<Marker key={c.name} title={c.name} position={c.position} />))}
            <></>
        </GoogleMap>
    ) : <></>
}

export default Map