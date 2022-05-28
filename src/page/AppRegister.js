import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import httpClient from '../components/httpClient'

const SignUpPage = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [cfpassword,setCfpassword] = useState('');

    const registerUser = async () => {
        try {
          const resp = await httpClient.post("//localhost:5000/register", {
            username,
            email,
            address,
            password,
            phone,
            cfpassword,
          });
    
          window.location.href = "/login";
        } catch (error) {
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        }
    };
    
    return(
        <div className = "container">
            <div className = "form">
                <h1>Sign Up Page</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type = "text" placeholder = "Your username"
                        value = {username}
                        name = "username"
                        onChange = {(e)=>{setUsername(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" placeholder = "Your email"
                        value = {email}
                        name = "email"
                        onChange = {(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type = "text" placeholder = "Your address"
                        value = {address}
                        name = "address"
                        onChange = {(e)=>{setAddress(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type = "text" placeholder = "Your phone number"
                        value = {phone}
                        name = "phone"
                        onChange = {(e)=>{setPhone(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" placeholder = "Your password"
                        value = {password}
                        name = "password"
                        onChange = {(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type = "password" placeholder = "Your password"
                        value = {cfpassword}
                        name = "cfpassword"
                        onChange = {(e)=>{setCfpassword(e.target.value)}}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as = "sub" variant = "primary" onClick = {() => registerUser()}>SignUp</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Already have an account, <Link to = '/Login'>Log In</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;