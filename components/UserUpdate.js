import { useState } from "react";
import generateData from "../middleware/generateData";
import useGeolocation from "../middleware/useGeolocation";
import axios from "axios";

export default function userUpdate(props) {

    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const geolocation = useGeolocation()

    function submit(data) {
        axios.post('/api/userUpdates', { name, longitude, latitude })
            .then(function (response) {
                // handle success
                console.log("req sent", response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }


    return (
        <div>
            <div>
                Hi, Enter your name and location:
            </div>
            <form>
                <label>Name:&nbsp;
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>Latitude:&nbsp;
                    <input
                        type="text"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />
                </label>
                <br />
                <label>Longitude:&nbsp;
                    <input
                        type="text"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={() => submit({ name, latitude, longitude })}>Submit</button>
            <br />
            <button onClick={() => generateLocalData()}>Generate Data </button>
            <div>
                {!geolocation.error
                    ? (
                        <ul>
                            <li>Latitude:          {geolocation.latitude}</li>
                            <li>Longitude:         {geolocation.longitude}</li>
                            <li>Location accuracy: {geolocation.accuracy}</li>
                            <li>Altitude:          {geolocation.altitude}</li>
                            <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
                            <li>Heading:           {geolocation.heading}</li>
                            <li>Speed:             {geolocation.speed}</li>
                            <li>Timestamp:         {geolocation.timestamp}</li>
                        </ul>
                    )
                    : (
                        <p>No geolocation, sorry.</p>
                    )}
            </div>
        </div >
    );


    function generateLocalData() {
        setLatitude(generateData().latitude);
        setLongitude(generateData().longitude);
        setName(generateData().name);
    }
}

