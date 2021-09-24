import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        let newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    //fetching the data
    const fetchTours = async () => {
        setLoading(true); // to make sure loading is set to true before get the data
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            alert(error);
        }
    };

    useEffect(() => {
        // to call fetchTours as soon the page loads
        fetchTours();
    }, []); // [] -> to load only once

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <button className="btn" onClick={fetchTours}>
                        refresh
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;
