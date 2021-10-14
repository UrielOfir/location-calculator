import { useState } from "react";
import generateData from "../middleware/generateData";

export default function userUpdate(props) {
    // todo: random user name, random location
    // location range:
    // Latitudes range from -90 to 90, and longitudes range from -180 to 80.

    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    function submit(data) {
        console.log(data);
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
        </div >
    );


    function generateLocalData() {
        setLatitude(generateData().latitude);
        setLongitude(generateData().longitude);
        setName(generateData().name);
    }
}

