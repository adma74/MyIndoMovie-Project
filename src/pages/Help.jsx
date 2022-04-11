import { Form } from 'react-bootstrap'

function HelpPage() {
    return (
        <div style={{ textAlign: 'center', margin: '150px' }}>
            {/* <Container> */}
            <div>
                <small>Dear User, we are ready to help</small>
            </div>
            <div>
                <Form style={{margin: '5px'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="email" placeholder="find what you need here" />                    </Form.Group>
                </Form>
            </div>
            <div>
                <p style={{ fontWeight: 'bold', margin: '5px' }}>Most frequently asked</p>
                <li>I forgot my password</li>
            </div>
            {/* </Container> */}
        </div>
    )
}

export default HelpPage;