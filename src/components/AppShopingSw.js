import { Link } from "react-router-dom";

function AppShopingSw(props) {
  const { Keycaps } = props;
  return (
    <div>
      <div class="col mb-5">
        <div class="card h-100">
          <img class="card-img-top" src={Keycaps.keycap_img} alt="..." />

          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">{Keycaps.keycap_name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppShopingSw;
