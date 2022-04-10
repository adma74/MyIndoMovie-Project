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

                </div>
            </div>
        </container>

    );
}

export default LoginPage;