import React,{useContext} from "react";
import { Card } from "react-bootstrap";
import UserContext from '../Context/UserContext'
import { useNavigate } from "react-router-dom";

function AppProfile() {
  const {logout,userData: user} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutHandle = () => {
    logout()
    navigate('/')
  }

  return (
    <div> 

      <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">User Profile</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Your information will be stored on this page.</p>
                </div>
            </div>
      </header>
      
      <section class="py-5">
        <div class="container px-5">
          <Card>
            <Card.Header as="h5">Name </Card.Header>
            <Card.Body>
              <Card.Text>{user.Customers_Name}</Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Header as="h5">Address </Card.Header>
            <Card.Body>
              <Card.Text>{user.Customers_Add}</Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Header as="h5">Phone Number  </Card.Header>
            <Card.Body>
              <Card.Text>{user.Customers_Phone}</Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Header as="h5">Email </Card.Header>
            <Card.Body>
              <Card.Text>{user.Customers_Email}</Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <button type="button" class="signout btn btn-dark" onClick={logoutHandle}>LOG OUT</button>
        </div>
      </section>
    </div>
  );
}

export default AppProfile;
