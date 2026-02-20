import { useState } from 'react';
import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import Body from '../components/Body.jsx';
import Body1 from '../components/Body1.jsx';
import Footer from '../components/Footer.jsx';
import { menImage } from '../products.js';
import { womenImage } from '../products.js';

/**
 * MainPage Component
 * Landing page with featured products and promotional banner
 * Contains routes for men and women sections
 */
const MainPage = () => {
  const [menF] = useState(menImage);
  const [womenF] = useState(womenImage);

  return (
    <div className="app">
      <Header />
      <Banner />

      <main className="app__content">
        <Body men1={menF} />
        <Body1 women1={womenF} />
      </main>

      <Footer />
    </div>
  );
};

export default MainPage;
