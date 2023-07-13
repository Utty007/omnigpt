import Header from "./Components/Header/Header";
import "./App.css";
import Menuitems from "./UI/menuItems";
import Frame1 from "./Components/Main/Frame1/Frame1";
import Frame2 from "./Components/Main/Frame2/Frame2";
import Frame3 from "./Components/Main/Frame3/Frame3";
import Frame4 from "./Components/Main/Frame4/Frame4";
import Frame5 from "./Components/Main/Frame5/Frame5";
import Frame6 from "./Components/Main/Frame6/Frame6";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [menuActiveState, setMenuActiveState] = useState(false);

  const menuToggleOn = () => {
    setMenuActiveState(true);
  };

  const menuToggleOff = () => {
    setMenuActiveState(false);
  };
  return (
    <div className="App">
      {menuActiveState && <Menuitems onClick={menuToggleOff} />}
      <Header onClick={menuToggleOn} />
      <Frame1 />
      <Frame2 />
      <Frame3 data-aos="fade-up" data-aos-duration="3000" />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Footer />
    </div>
  );
}

export default App;
