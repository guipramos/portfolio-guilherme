import React, { useEffect } from "react";
import { Banner } from "./components/Banner/Banner";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";

import TagManager from "react-gtm-module";

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-KSF7C8H",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div className="App">
      {/* <Header />
      <Banner />
      <Content />
      <Footer /> */}
      <div className="manutencao">
        <span>Pagina em construção!</span>
      </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
