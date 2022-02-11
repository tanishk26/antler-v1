import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signInWithGoogle } from '../firebase.js';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history("/");
        } catch {
            console.log(e.code);
            setError('Failed to log in');
        }
        setLoading(false);
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                        <Button disabled={loading} className="w-100 mt-3" type="submit">Log In</Button>
                    </Form>
                    <Button className="w-100 btn-danger mt-3" onClick={signInWithGoogle} type="submit">Sign in with Google</Button>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
}





// const signInWithGoogle = () => {
//     var google_provider = new useAuth.auth.GoogleAuthProvider();
//     useAuth.auth().signInWithPopup(google_provider)
//         .then((re) => {
//             console.log(re);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }