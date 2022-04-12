import  { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';


function LoginForm() {
    return (
        <div>

            <container style={{ marginTop: '100px' }}>
                <ToastContainer />
                <div className="row row-cols-2">
                    <div>
                        <img src="https://res.cloudinary.com/daszrlaoh/image/upload/v1649593087/undraw_Access_account_re_8spm_tncpti.png"
                            width="100%"
                            height="100%"
                            alt="img-register"
                        />
                    </div>

                    <div>
                        <h1 className="text-center mb-3"> Login</h1>
                        <Form onSubmit={(e) => onSubmit(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={form.email} onChange={(e) => changeEmail(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={form.password} onChange={(e) => changePassword(e)} />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                        <div style={{
                            marginTop: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            borderTop: '1px solid black',
                            paddingTop: '20px',
                            cursor: 'pointer'
                        }}
                            onClick={() => navigate("/register")}
                        >
                            Haven't an account? Register here !
                        </div>
                    </div>
                </div>
            </container>

        </div>
    )
}

export default FormLogin