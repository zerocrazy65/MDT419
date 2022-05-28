import "./App.css";
import AppHeader from "./components/AppHeader";

import AppHome from "./page/AppHome";
import SignUpPage from "./page/AppRegister";
import AppShoping from "./page/AppShoping";
import AppShopingInside from "./page/AppShopingInside";
import Cart from './page/Cart'
import UserLogin from './page/UserLogin'

// import UserContext from './Context/UserContext'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProfileadd from "./components/AppProfileadd";

function App() {
  return (
    <div className="App">
      {
        <Router>
          <AppHeader />
          <Routes>
            <Route path="/" element={<AppHome/>} />
            <Route path="/shoping" element={<AppShoping />} />
            <Route path="/shoping/shopingInside/:id" element={<AppShopingInside/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/profile" element ={<AppProfileadd />}/>
          </Routes>
        </Router>
      }

      {/*------------------ home ------------------*/}

      {/* <AppSlide/>
      <AppGuide/>
      <AppContent/>
      <AppFooter/> */}
      {/*------------------ shoping ------------------*/}

      {/* <AppSlide/>
      <AppShoping/>
      <AppFooter/> */}
    </div>
  );
}

export default App;
