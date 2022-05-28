import AppShopingDetail from "../components/AppShopingDetail";
import AppShopingSw from "../components/AppShopingSw";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Keycaps =[
  {
    keycap_name: "Epomaker Lemon Keycaps Set",
    keycap_img: "/image/keycap/kc1.png",
    
  },
  {
    keycap_name: "Epomaker Sea Salt Keycaps Set V2",
    keycap_img: "/image/keycap/kc2.png",
    
  },
  {
    keycap_name: "Epomaker Keycaps Set",
    keycap_img: "/image/keycap/kc3.png",
    
  },
];

function AppShopingInside() {
  const [proDetail, setProDetail] = useState([]);
  const { id } = useParams();
  async function fetchData() {
    axios.get("/shopingInside").then((res) => {
      setProDetail(res.data.data);
      console.log(res);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  const KeyboardElements = proDetail
    .filter((proDetail) => proDetail.Product_ID === id)
    .map((KeyboardDetail, index) => {
      return <AppShopingDetail key={index} KeyboardDetail={KeyboardDetail} />;
    });
 

  const KeycapsElements = Keycaps.map((Keycaps, index) => {
    return <AppShopingSw key={index} Keycaps={Keycaps} />;
  });
  return (
    <div>
      {KeyboardElements}
      <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <h2 class="fw-bolder mb-4">Related products</h2>
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {KeycapsElements}
          </div>
        </div>
      </section>
    </div>
  );
}

export default (AppShopingInside) ;
