import { useState, useEffect, useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const Map = () => {
    const { } = useLoadScript({ googleMapsApiKey: "test" })
    return (
        <div class="container">
            <div class="center">
                <h1>Map</h1>
            </div>
        </div>
    )
}

export default Map