import { useState } from "react";
import generateData from "../middleware/generateData";
// import redis from "../middleware/redis";

export default function Admin() {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [radius, setRadius] = useState("");

    function submit(data) {
        console.log(data);
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
            <button onClick={() => redis()}>Submit</button>
            <br />
            <button onClick={() => generateLocalData()}>Generate Data</button>
        </div>);

    function generateLocalData() {
        setLatitude(generateData().latitude);
        setLongitude(generateData().longitude);
        setRadius(generateData().radius);
    }
}

