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
            fetch ('https://62535ce690266e3d0e02674e.mockapi.io/user' , {
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
        <FormRegister />
    );
}
export default SignInPage;