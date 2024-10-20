import icon1 from "../assets/icons/discount.png";
import icon2 from "../assets/icons/fresh.png";
import icon3 from "../assets/icons/delivery.png";
const Features = () => {
  return (
    <>
      <section className="features">
        <div className="feature">
          <img src={icon1} alt="discount" />
          <div>
            <h3>discount Voucher</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="feature">
          <img src={icon2} alt="fresh" />
          <div>
            <h3>Fresh Healthy Food</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="feature">
          <img src={icon3} alt="delivery" />
          <div>
            <h3>Fast Home Delivery</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
