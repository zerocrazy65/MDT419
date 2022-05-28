import {Link} from 'react-router-dom';


function AppShopingItem(props) {
  const {Keyboard} = props;
  return (
    <div>
      <div class="col mb-5">
        <div class="card h-100">
          <img class="card-img-top" src={`image/sh/${Keyboard.thumbnailUrl}`}  alt="keyboard" />
          <div class="card-body p-4">
            <div class="text-center">
              <h4 className="fw-bolder">{Keyboard.Product_Name}</h4>
              <p className="pice">{Keyboard.Product_Price} Bath</p>
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <Link class="btn btn-outline-dark mt-auto" to={`shopingInside/${Keyboard.Product_ID}`}>App Cart </Link>
            </div>
          </div>

        </div>

      </div>
     </div> 
  )
}

export default AppShopingItem