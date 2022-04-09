import { Row, Col, Card, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"


function ContentCard() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <h1 style={{ margin: '50px', textAlign: 'center' }}> Movielist </h1>

            <Row xs={2} md={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card style={{ width: '18rem' }} onClick={() => movePage("/details")}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ContentCard