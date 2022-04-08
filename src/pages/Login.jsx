import { Form, Button } from "react-bootstrap";

function LoginPage() {
    return (
        <container>
            <div className="row row-cols-2">
                <div>

                </div>

                <div>
                <H1 className="text-center mb-3"> Login</H1>
            <Form> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </div>
            </div>
        </container>

    );
}

export default LoginPage;