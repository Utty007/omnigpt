import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Menuitems from "./UI/menuItems";
import { Header, Footer, Frame1, Frame2, Frame3, Frame4, Frame5, Frame6 } from "./Components/Index"
import "./App.css";

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
