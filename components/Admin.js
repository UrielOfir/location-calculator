import { useState } from "react";
import generateData from "../middleware/generateData";
import axios from "axios";

import List from "./List";

export default function Admin() {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [radius, setRadius] = useState("");
    const [usersInCircle, setUsersInCircle] = useState([]);

    function submit(data) {
        axios.post('/api/adminReq', { latitude, longitude, radius })
            .then(function (response) {
                // handle success
                console.log("req sent", response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    function generateDataLocal() {
        setLatitude(generateData().latitude);
        setLongitude(generateData().longitude);
        setRadius(generateData().radius);
    }

    return (
        <div>
            <div>
                Hi, enter location and radius (km):
            </div>
            <form>

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
                <br />
                <label>Radius:&nbsp;
                    <input
                        type="text"
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
                    />
                </label>
                <br />
            </form>
            <button onClick={() => submit()}>Submit</button>
            <br />
            <button onClick={() => generateDataLocal()}>Generate Data</button>
            {/* <List arr={usersInCircle}/> */}
        </div>);


}

