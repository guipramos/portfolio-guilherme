import React from 'react';
import { Banner } from './components/Banner/Banner';
import { Content } from './components/Content/Content';
import {Header} from './components/Header/Header';
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <Content />
      <GlobalStyle/>
    </div>
  );
}

export default App;
