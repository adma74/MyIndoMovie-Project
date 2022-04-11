function LoginForm() {
    return (
        <div>
             <Container style={{ marginTop: '70px'}}>
            <div className="row row-cols-2">
                <div>
                    <img src="https://res.cloudinary.com/daszrlaoh/image/upload/v1649593087/undraw_Home_screen_re_640d_udbfye.png"
                    width="100%"
                    height="100%"
                    alt="img-register"
                    />
                </div>

                <div>
                <h1 className="text-center mb-3"> Register </h1>
                <Form onSubmit={ (e) => onSubmit(e)}> 
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter Username" />
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={form.email} onChange={(e) => changeEmail(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  value={form.password} onChange={(e) => changePassword(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={form.confirmPassword} onChange={(e) => changeConfirmPassword(e)}/>
                    {
                        isPassMatch
                        ? <div></div>
                        : <div style={{ color: 'red', fontstyle: 'italic'}} > password doesn't match !</div>
                    }
                </Form.Group>

                <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                    Sign Up
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
                onClick={() => navigate("/Login")}
            >
                    Have an account? Login Here!
                    
                </div>
                </div>
            </div>
        </Container>
        </div>
    )
     }