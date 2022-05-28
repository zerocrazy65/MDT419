import "bootstrap/dist/css/bootstrap.min.css";
import "./AppContent.css";

import { Button } from "react-bootstrap";

function AppContent() {
  return (
    <div className="Content_Container">
      <div className="subset_content" id="MKG">
        <div className="LayText">
          <div class="container px-5 my-5">
            <div class="row gx-5 align-items-center">
              <div className="bgImg"></div>
              <div class="col-lg-6 order-first order-lg-last">
                <img
                  class="d-block w-100"
                  src="/image/Q2.png"
                  alt="..."
                  data-aos="zoom-in-left"
                />
              </div>
              <div class="col-lg-6">
                <h2 class="fw-bolder">Layout</h2>
                <p class="lead fw-normal text-muted mb-0">
                  The fully assembled version includes:The keyboard PCB, the
                  case, and the aluminum plate.Double-shot ABS keycaps (included
                  additional Mac & Windows keycaps).Gateron Phantom switches. A
                  premium coiled Type-C cable. The barebone version does not
                  include the keycaps and switches. No discount codes can be
                  used for the Q1.
                </p>
                <br></br>
                <Button variant="dark" href="#LayoutHome">
                  View more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subset_content">
        <div className="SWText">
          <div class="container px-5 my-5">
            <div class="row gx-5 align-items-center">
              <div className="bgImgSW"></div>
              <div class="col-lg-6">
                <img
                  class="d-block w-100"
                  src="/image/SW1.png"
                  alt="..."
                  data-aos="zoom-in-right"
                />
              </div>
              <div class="col-lg-6">
                <h2 class="fw-bolder">Switches</h2>
                <p class="lead fw-normal text-muted mb-0">
                  Mechanical keyboard switches are the core components of a
                  mechanical keyboard. These unique little devices are the main
                  contributors to the tactile and clicky experience. But there
                  are numerous types of keyboard switches with different names
                  and features, do you know which type of switches serve you the
                  best?
                </p>
                <br></br>
                <Button variant="dark" href="#SwitchesHome">
                  View more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subset_content">
        <div className="KCText">
          <div class="container px-5 my-5">
            <div class="row gx-5 align-items-center">
              <div className="bgImgKC"></div>
              <div class="col-lg-6 order-first order-lg-last">
                <img
                  class="d-block w-100"
                  src="/image/Keycap.png"
                  alt="..."
                  data-aos="zoom-in-left"
                />
              </div>
              <div class="col-lg-6">
                <h2 class="fw-bolder">Keycaps</h2>
                <p class="lead fw-normal text-muted mb-0">
                  What better way to spiff up your mechanical keyboard than to
                  get a brand-new set of keycaps? By replacing your old keycaps
                  you’re able to get rid of your thin and poorly made ABS
                  keycaps and replace them with a new keycap set with an awesome
                  unique design and color.
                </p>
                <br></br>
                <Button variant="dark" href="#KeycapsHome">
                  View more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AppAbout/> */}
    </div>
  );
}

export default AppContent;
