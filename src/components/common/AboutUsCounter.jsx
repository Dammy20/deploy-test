import React from 'react'
import CountUp from "react-countup";

function AboutUsCounter() {

  return (
    <>
      <div className="about-us-counter pb-120">
        <div className="container">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-10 col-10">
              <div className="counter-single text-center d-flex flex-row hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                <div className="counter-icon"> <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/employee.svg"} /> </div>
                <div className="coundown d-flex flex-column">
                  <h3 className="odometer" data-odometer-final={5400}><CountUp end={210} delay={2} duration={5} /></h3>
                  <p>Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 col-10">
              <div className="counter-single text-center d-flex flex-row hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                <div className="counter-icon"> <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/review.svg"} /> </div>
                <div className="coundown d-flex flex-column">
                  <h3 className="odometer" data-odometer-final={1250}><CountUp end={250} delay={2} duration={5} /></h3>
                  <p>Good Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 col-10">
              <div className="counter-single text-center d-flex flex-row hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                <div className="counter-icon"> <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/smily.svg"} /> </div>
                <div className="coundown d-flex flex-column">
                  <h3 className="odometer" data-odometer-final={4250}><CountUp end={150} delay={2} duration={5} /></h3>
                  <p>Winner Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 col-10">
              <div className="counter-single text-center d-flex flex-row hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".8s">
                <div className="counter-icon"> <img alt="images" src={process.env.PUBLIC_URL + "/images/icons/comment.svg"} /> </div>
                <div className="coundown d-flex flex-column">
                  <h3 className="odometer" data-odometer-final={500}><CountUp end={550} delay={2} duration={5} /></h3>
                  <p>New Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default AboutUsCounter