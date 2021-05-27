import React, { useEffect, useState } from 'react';
import './Temperature.css';

const Temperature = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");
    // const [temp, setTemp] = useState(null);
    // const [res, setres] = useState(null)

    useEffect(
        () => {
            const fetchAPI = async () => {

                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0f8a7bd4982d28e2c88b88c7cc4a9cf5&units=metric`;

                const response = await fetch(url);
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json'
                //     }
                // }
                // )

                // response.then((response) => {
                //     console.log(response)
                //     return response.json()
                // }
                // ).then((data) => { console.log(data) })
                const resJson = await response.json();

                console.log(resJson)
                setCity(resJson.main)


            };

            // const resJson = await response.json();
            // setCity(resJson.city);

            fetchAPI();
        }, [search]
    )

    // useEffect(
    //     () => {
    //         const url = `api.openweathermap.org/data/2.5 / weather ? q = ${ search }& appid=0f8a7bd4982d28e2c88b88c7cc4a9cf5`
    //         const res = fetch((url));
    //         res.then((response) => response.json)
    //         console.log(res)
    //         // console.log(res.then(res.json))
    //     }
    // )

    const handleEvent = (event) => {
        // setCity(event.target.value);
        setSearch(event.target.value)

        // console.log(resJson)
    }
    return (
        <>

            <input type="text" onChange={handleEvent} placeholder="City Name" className="searchBox" />

            {

                !city ? (<div className="mainDisplay">
                    <h2 className="cityName">City Name</h2>
                    <h3>-- </h3>
                    <h2 className="cityName">Temperature</h2>
                    <h3>--{"°C"}</h3>

                </div>) : (
                        <div className="mainDisplay">
                            <h2 className="cityName">City Name</h2>
                            <h3>{search}</h3>
                            <h2 className="cityName">Temperature</h2>
                            <h3>{city.temp}{"°C"}</h3>

                        </div>
                    )}


        </>
    )

}






export default Temperature;
