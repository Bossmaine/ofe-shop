import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { Form, Row, Col, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useLoginMutation } from "../slices/usersSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const { userInfo } = useSelector((state) => state.auth);

    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const redirect = searchParams.get('redirect') || '/';

    useEffect(() => {
        if(userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...response }));
            navigate(redirect);
        } catch (error) {
            console.log('Error in handleSubmit:', error);
            toast.error(error?.data?.message || error.error);
        }
    };
        
  return (
    <FormContainer>
        <h1 className="text-center mt-4">Login</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="my-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="password" className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} >
                </Form.Control>
            </Form.Group>
            <Button type="submit" disabled={isLoading} variant="dark" className="mt-2">Login</Button>

            { isLoading && <Loader />}
        </Form>
        <Row className="py-3">
            <Col>
                <p>Don't have an account? <Link to={ redirect ? `/register?redirect=${redirect}`: '/register'}>Register</Link></p>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginPage
