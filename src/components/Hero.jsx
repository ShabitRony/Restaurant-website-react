import Pic from "../assets/images/hero_image.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_image">
          <img src={Pic} alt="hero image" />
        </div>
        <div className="hero_content">
          <div className="tag">50% Off on All Products</div>
          <h1>Enjoy Your Delicious Food</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            pariatur, nesciunt harum quidem ullam id adipisci et nam molestias
            aspernatur! Excepturi corporis quidem veritatis repellendus fugiat
            dolores sequi reprehenderit praesentium?
          </p>

          <button className="explore_btn">Explore Now</button>
        </div>
      </div>
    </>
  );
};
export default Hero;
