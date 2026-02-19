import './App.css';
import MainPage from './Zepto/pages/MainPage.jsx'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    </div>
  );
}

export default App;
