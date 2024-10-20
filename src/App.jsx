import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        {/* <!-- Hero Section --> */}
        <Hero />
        <Features />
        <div className="divider"></div>
        <Menu />
      </div>
      <Footer />
    </>
  );
};

export default App;
