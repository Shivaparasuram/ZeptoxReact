import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import Body from '../components/Body.jsx';
import Body1 from '../components/Body1.jsx';
import Footer from '../components/Footer.jsx';
import { menImage } from '../products.js';
import { womenImage } from '../products.js';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

const MainPage = () => {
  const [menF, setMen] = useState(menImage);
  const [womenF, setWomen] = useState(womenImage);

  return (
    <div>
      <Header />
      <Banner />
      <Routes>
        <Route path="/men" element={<Body men1={menF} />} />
        <Route path="/women" element={<Body1 women1={womenF} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainPage;