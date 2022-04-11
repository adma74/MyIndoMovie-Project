import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../assets/css/Card.css'

function CardHome() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <Row xs={1} md={5} className="g-4" >
                {Array.from({ length: 5 }).map((_, idx) => (
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
    )
}

export default CardHome