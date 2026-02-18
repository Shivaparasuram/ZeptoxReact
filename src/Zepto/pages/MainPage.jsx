import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import Body from '../components/Body.jsx';
import Body1 from '../components/Body1.jsx';
import Footer from '../components/Footer.jsx';    // .. to get inside the file
import {menImage} from '../products.js';
import {womenImage} from '../products.js';
import {useState} from 'react';


const MainPage=()=>{

    const [menF,setMen]=useState(menImage);
    const [womenF,setWomen]=useState(womenImage);

    return (
        <div>
            <Header/>
            <Banner/>
            <Body men1={menF}/>
            <Body1 women1={womenF}/>
            <Footer/>
        </div>
       )
    }

export default MainPage;