import React from 'react'
import { Link } from 'react-router-dom'

function BlogDetailsContent() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="blog-details-content">
        <h3>How To Use a Remarketing Strategy To Get Morelknoi anda malesuada sapienl and Donec sed nunc.</h3>
        <div className="author-date layout2">
          <Link to={"#"}>By, Admin</Link>
          <Link to={"#"}>Comment (02)</Link>
          <Link to={"#"}>22.02.2022</Link>
        </div>
        <div className="details-thumb">
          <img src={process.env.PUBLIC_URL + "/img/blog/blog-thumb.jpg"} alt="images" />
        </div>
        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque risus. Vivamus vehicula nl purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat nisi, vehicula quis faucibus il ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin. Pellentesque at neque nec justo sokal porttitor egestas nec eget ex.Etiam suscipit neque elit, hendrerit laoreet quam ultrices id. Proin nec tolde lacinia ligula, sed laoreet ex. Sed nisl ligula, euismod vel justo scelerisque, vestibulum ultricies tellus. volv Pellentesque vel turpis vitae urna tincidunt hendrerit at ut est. Sed eget feugiat felis. Integer sed ornare sem, eget porttitor nisi. Nunc erat sapien, porta laoreet gravida ac, dictum eu tortor. Nulla faucibus leoren rhoncus, gravida ligula a, ultrices enim. Proin lacinia malesuada finibus. Proin sit amet arcu sem. dontami Phasellus ut pharetra purus, sed condimentum dui. Suspendisse potenti. Nam bibendum, augue europea ultricies semper, nisi lorem consectetur diam, nec dapibus nulla tortor at sem.</p>
        <div className="blog-gallery">
          <div className="b-gallery">
            <img src={process.env.PUBLIC_URL + '/img/blog/blog-gallery-1.jpg'} alt="images" />
          </div>
          <div className="b-gallery">
            <img src={process.env.PUBLIC_URL + '/img/blog/blog-gallery-2.jpg'} alt="images" />
          </div>
        </div>
        <h4>Remarketing Strategy To Get Morelknoi anda?</h4>
        <div className="special">
          <p><span>V</span>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh elementum, accu neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque risus. Vivamus v</p>
        </div>
        <p>purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat nisi, vehicula quis faucibus il ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin. Pellentesque at neque nec justo sokal porttitor egestas nec eget ex.Etiam suscipit neque elit.</p>
        <div className="blog-quote">
          <i className="fas fa-quote-left" />
          <p>Purus at eros interdum, in dignissim nulla vestibulum. pellentesque quis magna eu vestibulum. Ut sed nec e commodo neque. Morbi erat nisi, vehicula porttitor egut, hendrerit vel tortor. In pharetra lectus luctus.</p>
        </div>
        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque risus. Vivamus vehicula nl purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat nisi, vehicula quis faucibus il ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin. Pellentesque at neque nec justo sokalporttitor egestas nec eget ex.Etiam suscipit neque elit, hendrerit laoreet quam ultrices id. Proin nec toldelacinia ligula, sed laoreet ex. Sed nisl ligula, euismod vel justo scelerisque, vestibulum ultricies tellus. volv Pellentesque vel turpis vitae urna tincidunt hendrerit at ut est.</p>
        <div className="tag-share">
          <div className="line-tag">
            <span>Tag:</span>
            <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>web,</Link>
            <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>template,</Link>
            <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>app,</Link>
            <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>software,</Link>
            <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>plugin</Link>
          </div>
          <div className="share-blog">
            <span>Share On:</span>
            <ul className="social-share-blog">
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a></li>
              <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p" /></a></li>
              <li><a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="comments">
          <h3>2 Comment</h3>
          <div className="single-comment">
            <div className="author-post">
              <div className="reply">
                <Link to={"#"}><i className="bi bi-reply" />Reply</Link>
              </div>
              <div className="author-thumb">
                <img src={process.env.PUBLIC_URL + '/img/author-1.jpg'} alt="images" />
              </div>
              <div className="author-info">
                <h5>Polard Girdet</h5>
                <span>11 January, 2022 At 01.56 pm</span>
              </div>
            </div>
            <p>Donec bibendum enim ut elit porta ullamcorper. Vestibulum quam nulla, venenatis eget iaculis cold vitae nulla. Morbi mattis nec mi ac mollis. Nam et consequat tellus, a varius mag iaculis, ligula vitae commodo blandit, augue urna accumsan sapien.</p>
          </div>
          <div className="single-comment">
            <div className="author-post">
              <div className="reply">
                <Link to={"#"}><i className="bi bi-reply" />Reply</Link>
              </div>
              <div className="author-thumb">
                <img src={process.env.PUBLIC_URL + "/img/author-2.jpg"} alt="images" />
              </div>
              <div className="author-info">
                <h5>algiro mudaran</h5>
                <span>11 January, 2022 At 01.56 pm</span>
              </div>
            </div>
            <p>Donec bibendum enim ut elit porta ullamcorper. Vestibulum quam nulla, venenatis eget iaculis cold vitae nulla. Morbi mattis nec mi ac mollis. Nam et consequat tellus, a varius mag iaculis, ligula vitae commodo blandit, augue urna accumsan sapien.</p>
          </div>
        </div>
        <div className="comment-form">
          <h5>Leave A Comment</h5>
          <form onSubmit={(e)=>e.preventDefault()} action="#" method="post">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name">Name*
                  <input type="text" name="name" placeholder="Your Name" id="name" />
                </label>
              </div>
              <div className="col-md-6">
                <label htmlFor="email">Email*
                  <input type="email" name="email" placeholder="Enter Your Email" id="email" />
                </label>
              </div>
              <div className="col-12">
                <label htmlFor="msg">Message*
                  <textarea name="message" cols={30} rows={10} placeholder="Type your Message" id="msg" defaultValue={""} />
                </label>
                <input type="submit" defaultValue="Submit Comment" />
              </div>
            </div>
          </form>
        </div>
      </div>   
    </>
  )
}

export default BlogDetailsContent