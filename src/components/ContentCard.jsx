import { Row, Col, Card, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"


function ContentCard() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <div style={{ justifyConten: 'center'}}>
            <Container>
                <Row xs={1} md={5} className="g-4">
                    {Array.from({ length: 15 }).map((_, idx) => (
                        <Col>
                            <Card onClick={() => movePage("/details")} bg='black'>
                                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg" />
                                <Card.Body>
                                    <Card.Title>Movie title</Card.Title>
                                    <Card.Text>Trailer</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ContentCard