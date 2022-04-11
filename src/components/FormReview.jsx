import { Card, Form, Button, Container } from 'react-bootstrap'

function FormReview() {
    return (
        <Container>
            <Card style={{ display: 'flex', flexDirection: 'row', color: 'black' }}>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>
                                <h4>Review</h4>
                            </Form.Label>
                            <Form.Control size="xxl" as="textarea" rows={3} placeholder="Leave your review here..." />
                        </Form.Group>
                    </Form>
                    <div className="d-flex justify-content-end">
                        <Button> Send </Button>
                    </div>
                </Card.Body>
            </Card>
            <div style={{ marginTop: '40px' }}>
                <h4>List Review</h4>
            </div>
            <div>
                <li>Admaja</li>
                <br></br>
                <ul>Review : Lucu</ul>
            </div>
        </Container>
    )
}

export default FormReview