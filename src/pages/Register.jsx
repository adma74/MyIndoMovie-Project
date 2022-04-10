import { Form, Button, Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";


function SignInPage() {
    const navigate = useNavigate()
    const [ form, setForm ] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })   

    const [isPassMatch, setIsPassMatch] = useState(true)
    
    const changeEmail = (e) => {
        const value = e.target?.value

        setForm({
            ...form,
            email: value
        })
    }

    const changePassword = (e) => {
        const value = e.target?.value

        setForm({
            ...form,
            password: value
        })

        if (form.confirmPassword && value) {
            if (value !== form.confirmPassword) {
                setIsPassMatch(false)
            } else {
                setIsPassMatch(true)
            }
        }
    }

    const changeConfirmPassword = (e) => {
        const value = e.target?.value

        setForm({
            ...form,
            confirmPassword: value
        })

        if (form.password && value) {
            if (value !== form.password) {
                setIsPassMatch(false)
            } else {
                setIsPassMatch(true)
        }
    }
}

    const onSubmit = (e) => {
        e.preventDefault()
        if (form.email) {
        if (form.password && form.confirmPassword && form.password === form.confirmPassword) {
            console.log(form)
            fetch ('https:' , {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password,
                createdAt: new Date()

            })
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('userLogin', form.email)
                localStorage.setItem('userLoginID', data?.id)
                navigate('/')
            })
            .catch(err => console.log(err))
        } else {
            setIsPassMatch(false)
        }
    }
}

    return (
        <Container style={{ marginTop: '70px'}}>
            <div className="row row-cols-2">
                <div>

                </div>

                <div>
                <h1 className="text-center mb-3"> Register </h1>
                <Form onSubmit={ (e) => onSubmit(e)}> 
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
    );
}
export default SignInPage;