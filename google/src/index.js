import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WordBox from './components/wordbox/wordbox'
import SearchButton from './components/searchbutton/searchbutton'
import LuckyButton from './components/luckybutton/luckybutton'
import LanguageNote from './components/languagenote/languagenote'
import Footer from './components/footer/footer.jsx'
import FooterLast from './components/footerlast/footerlast.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <WordBox/>
    <SearchButton/>
    <LuckyButton/>
    <LanguageNote/>
    <Footer/>
    <FooterLast/>
  </React.StrictMode>
);


