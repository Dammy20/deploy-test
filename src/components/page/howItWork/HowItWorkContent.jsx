import React from "react";
import { Link } from "react-router-dom";

function HowItWorkContent() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="how-work-section pt-120 pb-120">
        <img
          alt="images"
          src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"}
          class="section-bg-top"
        />
        <div className="container">
          <div className="row g-4 mb-60">
            <div className="col-xl-6 col-lg-6">
              <div
                className="how-work-content wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <span>01.</span>
                <h3>Register Now &amp; Start Selleing Your Things</h3>
                <p className="para">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections
                </p>
                <p className="para">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found him self transformed in his bed into a horrible vermin.
                </p>
                <Link
                  to={`${process.env.PUBLIC_URL}/signup`}
                  onClick={scrollTop}
                  className="eg-btn btn--primary btn--md"
                >
                  Register Account
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div
                className="how-work-img wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <img
                  alt="images"
                  src={process.env.PUBLIC_URL + "/images/bg/how-work1.png"}
                  className="work-img"
                />
              </div>
            </div>
          </div>
          <div className="row g-4 mb-60">
            <div className="col-xl-6 col-lg-6 d-flex justify-content-lg-start justify-content-center order-lg-1 order-2">
              <div
                className="how-work-img wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <img
                  alt="images"
                  src={process.env.PUBLIC_URL + "/images/bg/how-work2.png"}
                  className="work-img"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
              <div
                className="how-work-content wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <span>02.</span>
                <h3>Select Your Item</h3>
                <p className="para">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections
                </p>
                <p className="para">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found him self transformed in his bed into a horrible vermin.
                </p>
                <Link
                  to={`${process.env.PUBLIC_URL}/live-auction`}
                  onClick={scrollTop}
                  className="eg-btn btn--primary btn--md"
                >
                  Add Your Item
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-6 col-lg-6">
              <div
                className="how-work-content wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <span>03.</span>
                <h3>Purcahse Items</h3>
                <p className="para">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections
                </p>
                <p className="para">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found him self transformed in his bed into a horrible vermin.
                </p>
                <Link
                  to={`${process.env.PUBLIC_URL}/live-auction`}
                  onClick={scrollTop}
                  className="eg-btn btn--primary btn--md"
                >
                  Purchase Item
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div
                className="how-work-img wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <img
                  alt="images"
                  src={process.env.PUBLIC_URL + "/images/bg/how-work3.png"}
                  className="work-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorkContent;
