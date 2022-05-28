import React from "react";

import { Button, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppAbout() {
  return (
    <div>
      {/* Layout */}
      <hr></hr>
      <section class="py-5" id="LayoutHome">
        <div class="container px-5 my-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <h3 class="fw-bolder">Normal Layout Keyboards </h3>
              </div>
            </div>
            <div class="lg-6">
              <img
                class="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/2021918112944-1631935802996.jpeg?v=1631935805"
                alt="..."
              />
            </div>
            <div class="lg-6">
              <img
                class="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/pf-f932311f--KeyboardGuide07.jpg?v=1623317741"
                alt="..."
              />
            </div>
            <div class="lg-6">
              <img
                class="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/pf-1fce7447--KeyboardGuide10.jpg?v=1623317756"
                alt="..."
              />
            </div>
            <div class="lg-6">
              <img
                class="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/q1751-1643451686837.jpeg?v=1643451688"
                alt="..."
              />
            </div>
            <div class="lg-6">
              <img
                class="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/q2651-1643451714460.jpeg?v=1643451715"
                alt="..."
              />
            </div>
            <div class="lg-6">
              <img
                class="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/pf-32311fce--KeyboardGuide08.jpg?v=1623317746"
                alt="..."
              />
            </div>
            <div class="lg-6">
              <img
                class="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/pf-ce74472c--KeyboardGuide11.jpg?v=1623317760"
                alt="..."
              />
            </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>

          {/* Swrites */}

          <div class="row gx-5 justify-content-center" id="SwitchesHome">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <h3 class="fw-bolder" alt="LayoutAbout">
                  Type of Switches
                </h3>
              </div>
            </div>
            <div className="SWText">
              <div class="container px-5 my-5">
                <div class="row gx-5 align-items-center">
                  <div class="col-lg-6">
                    <img
                      class="d-block w-100"
                      src="https://blog.thermaltake.com.au/wp-content/uploads/2017/03/CherryMXRed.gif"
                      alt="imgS"
                    />
                  </div>
                  <div class="col-lg-6">
                    <h2 class="fw-bolder">Linear switches</h2>

                    <p class="lead fw-normal text-muted mb-0">
                      A linear switch is the simplest mechanical switch because
                      the stem travels up and down without being impeded in any
                      way hence the name. The key registers the stroke, or
                      actuates, when it bottoms out at the end of its travel.
                      Gamers tend to prefer this kind of switch because it
                      allows for fast and unambiguous control within a game when
                      fractions of a second count.{" "}
                    </p>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>

            <div className="SWText">
              <div class="container px-5 my-5">
                <div class="row gx-5 align-items-center">
                  <div class="col-lg-6">
                    <img
                      class="d-block w-100"
                      src="https://i.gifer.com/SjY3.gif"
                      alt="..."
                    />
                  </div>
                  <div class="col-lg-6">
                    <h2 class="fw-bolder">Tactile switches</h2>

                    <p class="lead fw-normal text-muted mb-0">
                      This is similar to a linear switch but there is a bump in
                      the middle of its downward travel. This bump lines up with
                      the actuation point, which happens before the key bottoms
                      out. This does a few things. It enables faster typing
                      because each key doesn't need to travel as far to actuate.
                      At the same time, it's quieter than linear switches
                      because touch typists don't need to bottom out the keys.
                      And they have a feel that many typists prefer, thanks to
                      the noticeable tactile bump.{" "}
                    </p>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>

            <div className="SWText">
              <div class="container px-5 my-5">
                <div class="row gx-5 align-items-center">
                  <div class="col-lg-6">
                    <img
                      class="d-block w-100"
                      src="http://www.keyboardco.com/blog/wp-content/uploads/2012/10/Blue.gif"
                      alt="..."
                    />
                  </div>
                  <div class="col-lg-6">
                    <h2 class="fw-bolder">Clicky switches </h2>

                    <p class="lead fw-normal text-muted mb-0">
                      A variation of the tactile switch, a clicky switch makes a
                      noticeable click at the bump. As you can imagine, these
                      are the loudest of the mechanical keyboards, because every
                      stroke results in a clicking sound. They're reassuring for
                      beginners who aren't yet comfortable behind a keyboard and
                      need additional feedback while typing. Some typists simply
                      prefer the sound of clicky keyboards as well.{" "}
                    </p>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>

          {/* Keycaps */}

          <div className="KC" id="KeycapsHome">
            <div className="">
              <section class="py-5">
                <div class="container px-5 my-5">
                  <div class="text-center mb-5">
                    <h1 class="fw-bolder">Keycap Profiles</h1>
                    <br></br>
                    <p class="lead fw-normal text-muted mb-0">
                      A keycap’s profile refers to its shape. Though many
                      keycaps look similar in their top-down view, their height
                      can vary and your fingers can feel the difference in
                      shape.
                    </p>
                    <br></br>
                    <h3 class="fw-bolder lead fw-normalmb-0">
                      Uniform vs. Sculpted Keycap Profiles
                    </h3>
                  </div>
                  <div class="row gx-5">
                    <div class="col-lg-6">
                      <div class="position-relative mb-5">
                        <img
                          class="d-block w-100"
                          src="https://images.squarespace-cdn.com/content/v1/6116b9604a8e6b639a58a447/1628879296798-32YMUM3J5XE1RFKKFGJY/Sculpted+keycap+profile+-+Cherry?format=750w"
                          alt="..."
                        />
                        <div class="text-center mb-5">
                          <h3 class="fw-bolder lead fw-normalmb-0">
                            Sculpted Profile
                          </h3>
                          <br></br>
                          <p class="lead fw-normalmb-0">
                            A keyset with a sculpted profile means that each row
                            of keys has a different shape and height. This
                            matters when putting on keycaps: keycaps can’t be
                            used on the rows that they’re not designed for.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="position-relative mb-5">
                        <img
                          class="d-block w-100"
                          src="https://images.squarespace-cdn.com/content/v1/6116b9604a8e6b639a58a447/1628879296802-11L3Q5SQPAM1Z4MQX0G7/Uniform+keycap+profile+-+DSA?format=750w"
                          alt="..."
                        />
                        <div class="text-center mb-5">
                          <h1 class="fw-bolder lead fw-normalmb-0">
                            Uniform Profile
                          </h1>
                          <br></br>
                          <p class="lead fw-normalmb-0">
                            A keyset with a uniform profile means that each row
                            of keys is the same shape and height. Keycaps can be
                            placed on any row as needed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="KCTextAB">
                    <div class="container px-5 my-5">
                      <div class="row gx-5">
                        <div class="col-lg-5 order-first order-lg-last">
                          <img
                            class="d-block w-100"
                            src="https://images.squarespace-cdn.com/content/v1/6116b9604a8e6b639a58a447/1628879296812-98JOY196V7404C5MHQKA/Keycap+profiles+comparison+chart?format=500w"
                            alt="..."
                          />
                        </div>
                        <div class="col-lg-6">
                          <h2 class="fw-bolder lead fw-normalmb-0">
                            Common Keycap Profiles
                          </h2>
                          <br></br>
                          <li class="lead fw-normal text-muted mb-0">
                            Cherry — sculpted profile
                          </li>
                          <ul class="lead fw-normal text-muted mb-0">
                            Manufactured by: GMK, Infinikey, ePBT, JTK
                          </ul>
                          <br></br>
                          <li class="lead fw-normal text-muted mb-0">
                            DSA — uniform profile
                          </li>
                          <ul class="lead fw-normal text-muted mb-0">
                            Manufactured by: Keyreative
                          </ul>
                          <br></br>
                          <li class="lead fw-normal text-muted mb-0">
                            KAM — uniform profile
                          </li>
                          <ul class="lead fw-normal text-muted mb-0">
                            Manufactured by: Keyreative
                          </ul>
                          <br></br>
                          <li class="lead fw-normal text-muted mb-0">
                            KAT — sculpted profile
                          </li>
                          <ul class="lead fw-normal text-muted mb-0">
                            Manufactured by: Keyreative
                          </ul>
                          <br></br>
                          <li class="lead fw-normal text-muted mb-0">
                            MT3 — sculpted profile
                          </li>
                          <br></br>
                          <li class="lead fw-normal text-muted mb-0">
                            OEM — sculpted profile. Often the profile of stock
                            keycaps that come with a pre-built keyboard.
                          </li>
                          <ul class="lead fw-normal text-muted mb-0">
                            Manufactured by: Tai-Hao
                          </ul>
                          <br></br>
                          <li class="lead fw-normal text-muted mb-0">
                            SA— sculpted profile
                          </li>
                          <ul class="lead fw-normal text-muted mb-0">
                            Manufactured by: Signature Plastics
                          </ul>
                          <br></br>
                          <br></br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='AboutContent'>
                <div class="col-lg-6"><img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/2021918112944-1631935802996.jpeg?v=1631935805" alt="..." /></div>
            </div> */}
    </div>
  );
}

export default AppAbout;
