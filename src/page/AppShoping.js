import AppShopingItem from "../components/AppShopingItem";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";

function AppShoping() {
  const [keyBoards, setProduct] = useState([]);
  // filter
  const [searchText, setSearchText] = useState('');

  async function fetchData() {
    axios.get("/shoping").then((res) => {
      setProduct(res.data.name);
      console.log(res);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  // filter
  // const filteredKeyboard = keyBoards.filter((Keyboard) =>{
  //   return Keyboard.title.includes(searchText);
  // })

  // const KeyboardElements = filteredKeyboard && keyBoards.map((Keyboard, index) => {
  //     return <AppShopingItem  key={index} Keyboard={Keyboard} />;
  //   });

    const KeyboardElements = keyBoards && keyBoards.map((Keyboard, index) => {
      return <AppShopingItem  key={index} Keyboard={Keyboard} />;
    }); 
    // ver old non filter


  return (
    <div>
      <header class="bg-dark py-5" id="list-item-1">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Get back to buying guid</h1>
                                <h6 class="lead fw-small text-white-50 mb-4">Mechanical keyboards come with many positives: They’re more satisfying to type on, more durable, and offer more room for personalization than standard keyboards. But there’s a lot more to them than that, and if you want to ensure you’re getting the best keyboard for you, there are some things you need to know first.</h6>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                </div>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <Button  as={Link} to ="/" variant="primary" >Back</Button>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="d-block w-100" src='/image/Q2.png' alt="..."/></div>
                    </div>
                </div>
        </header>

      {/* <AppSlide/> */}
      {/* <div className="app-search">
            <input 
                className="app-search   -input"
                type="text"
                placeholder="Search your item"
                value = {searchText}
                onChange={(event) => {setSearchText(event.target.value)}}
            />    
      </div> */}

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-3 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
            {KeyboardElements}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AppShoping;
