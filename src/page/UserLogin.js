import axios from "axios";
import React, { useState,useContext} from "react";
import { Form, Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import UserContext from '../Context/UserContext'

export default function UserLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setIsAuth} = useContext(UserContext)
  const navigate = useNavigate()

  const logInUser = async () => {
      return await axios
        .post("/login", {
          email,
          password,
        }).then(() => {
           localStorage.setItem('userEmail',JSON.stringify(email))
           setIsAuth(true)
          }).then(() => {
          navigate("/profile")
        })
  }
  return(
    <div className="container">
      <div className="form">
        <h1>Login Page</h1>
        <form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <br></br>
          <Form.Group>
            <Button as="sub" variant="primary" onClick={() => logInUser()}>
              Login
            </Button>
          </Form.Group>
          <br></br>
          <Form.Group>
            <small>
              Do not have an account?{" "}
              <Link to="/register">Create an account</Link>
            </small>
          </Form.Group>
        </form>
      </div>
    </div>
  );
}

 
