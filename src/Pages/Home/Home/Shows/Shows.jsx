import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ShowCard from "../../ShowCard/ShowCard";

const Shows = () => {
    // state to store shows after loading form api 
    const [shows, setShows] = useState([]);
    // loading show data using api
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setShows(data))
    }, []);


    return (
        <Row xs={1} md={2} lg={4}  className="g-4">
                    {
                        shows.map(show => <ShowCard
                            key={show.show.id}
                            show={show.show}
                        ></ShowCard>)
                    }
        </Row>
    );
};

export default Shows;