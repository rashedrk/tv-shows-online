import { Rating } from "@smastrom/react-rating";
import { Button, Card, Col } from "react-bootstrap";
import '@smastrom/react-rating/style.css'

const ShowCard = ({ show }) => {
    const { name, image, type, language, genres, runtime, rating } = show;
    return (
        <Col>
            <Card className="mb-4 h-100">
                <Card.Img variant="top" src={image.medium} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>type: {type}</p>
                        <p>Language: {language}</p>
                        <p>Genres: {genres[0]} | {genres[1]}</p>
                        <p>Duration: {runtime}min</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                    <div className="mb-3">
                        {
                            rating.average ? <div className="d-flex gap-2">
                                <Rating
                                    style={{ maxWidth: 140 }}
                                    value={rating.average}
                                    items={10}
                                    readOnly
                                />
                                <span>{rating.average}</span>
                            </div>
                                : <small>No Review yet</small>
                        }
                    </div>
                    <Button variant="success">Show Details</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ShowCard;