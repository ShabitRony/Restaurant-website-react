import pics from "../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container container">
          <div className="footer_logo">
            <img src={pics} alt="logo" />
          </div>
          <div className="link_lists">
            <h3>Main Links</h3>
            <ul>
              <li>Order Tracking</li>
              <li>New Order</li>
              <li>Contact Us</li>
              <li>News & Blogs</li>
            </ul>
          </div>
          <div className="link_lists">
            <h3>Support</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <div className="news_letter">
              <h3>Support</h3>
              <input type="email" placeholder="Enter Your Email.." />
              <br />
              <div className="icon_container">
                <div className="icon">
                  <FaFacebook />
                </div>
                <a href="https://www.Facebook.com">Follow Us on Facebook </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
