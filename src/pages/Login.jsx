import { Form, Button } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


function LoginPage() {
    const navigate = useNavigate()
    const [ form, setForm ] = useState({
        email: '',
        password: ''
    }) 
    const location = useLocation()
    const stateLocation = location?.state

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
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (form.email && form.password) {
            fetch ('https:')
            .then(response => response.json())
            .then(data => {
                const findUser = data?.find(user => (user?.email === form.email) && (user?.password === form.password))
                if (findUser) {
                    console.log('Berhasil Login')
                    toast.success('Success Login !', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined,
                    })
                    localStorage.setItem('userLogin', form.email)
                    localStorage.setItem('userLoginID', findUser.id)
                    const fromLocation = stateLocation?.from?.pathname
                    if (fromLocation) {
                        navigate(fromLocation)
                    } else {
                        navigate('/')
                    }
                } else {
                    console.log('Gagal Login')
                    toast.error('Invalid Auth !', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            })
            .catch(err => console.log(err))
        }
    }
    return (
        <container style={{ marginTop: '100px'}}>
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
                <Form onSubmit={ (e) => onSubmit(e)}> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                    Sign In
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
                    Haven't an account? Register here!
                    
                </div>
                </div>
            </div>
        </container>

    );
}

export default LoginPage;