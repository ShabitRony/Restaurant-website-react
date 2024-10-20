import img1 from "../assets/images/grid_image1.png";
import img2 from "../assets/images/grid_image2.png";
import img3 from "../assets/images/grid_image3.png";
import img4 from "../assets/images/grid_image4.png";
import img5 from "../assets/images/grid_image5.png";
import img6 from "../assets/images/grid_image6.png";
import img7 from "../assets/images/grid_image7.png";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="tag">Our Menu</div>
        <h2>Explore Our Menu</h2>

        <div className="grid">
          <div className="item1">
            <img className="grid-image" src={img1} alt="" />
          </div>
          <div className="item2">
            <img className="grid-image" src={img2} alt="" />
          </div>
          <div className="item3">
            <img className="grid-image" src={img3} alt="" />
          </div>
          <div className="item4">
            <img className="grid-image" src={img4} alt="" />
          </div>
          <div className="item5">
            <img className="grid-image" src={img5} alt="" />
          </div>
          <div className="item6">
            <img className="grid-image" src={img6} alt="" />
          </div>
          <div className="item7">
            <img className="grid-image" src={img7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
