import { Row, Col, Card, Button } from 'react-bootstrap'

function ContentCard() {
    return (
        <div>
            <Row xs={2} md={4} className="g-4">
                {[1, 2, 3, 4].map((_, idx) => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ContentCard