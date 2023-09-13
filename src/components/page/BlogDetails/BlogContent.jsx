import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
function BlogContent() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="blog-content">
        <p className="para">
          Gochujang ugh viral, butcher pabst put a bird on it meditation austin
          craft beer banh. Distillery ramps af, goch ujang hell of VHS kitsch
          austin. Vegan air plant trust fund, poke sartorial ennui next lev el
          photo booth coloring book etsy green juice meditation austin craft
          beer.
        </p>
        <blockquote>
          <img
            alt="images"
            src={process.env.PUBLIC_URL + "/images/icons/quote-fill-green.svg"}
            className="quote-icon"
          />
          <p className="para">
            “If the delivery provider maintains all the standards then it is
            safe to have get products delivered to you. It is hard to maintain
            but still safer to get your products ordered If you’ve been
            following the crypto space”
          </p>
          <h5>-- Leslie Alexander</h5>
        </blockquote>
        <h4 className="sub-title">
          How can have anything you ant in life if you ?
        </h4>
        <p className="para">
          If you’ve been following the crypto space, you’ve likely heard of
          Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto
          Collectibles.’ The world of Biddings is growing rapidly. It seems
          there is no slowing down of these assets as they continue to go up in
          price. This growth comes with the opportunity for people to start new
          businesses to create and capture value. The market is open for players
          in every kind of field. Are you a collector.
        </p>
        <div className="blog-video-area">
          <div className="row g-4">
            <div className="col-md-6">
              <img
                alt="images"
                src={process.env.PUBLIC_URL + "/images/blog/blogd1.png"}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="video-wrapper position-relative">
                <div className="video-play">
                  <div
                    onClick={() => setOpen(true)}
                    className="popup-youtube video-icon"
                  >
                    <i className="bx bx-play" />
                  </div>
                </div>
                <img
                  alt="images"
                  src={process.env.PUBLIC_URL + "/images/blog/blogd2.png"}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="para">
          Gochujang ugh viral, butcher pabst put a bird on it meditation austin
          craft beer banh. Distillery ramps af, goch ujang hell of VHS kitsch
          austin. Vegan air plant trust fund, poke sartorial ennui next lev el
          photo booth coloring book etsy green juice meditation austin craft
          beer.
        </p>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="SMKPKGW083c"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default BlogContent;
