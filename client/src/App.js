import Header from './components/header';
import './styles/global.css';
import Intro from './components/intro';
import About from './components/about';
import SocialSection from "./components/socials-section";
import EmailSection from "./components/email-section";

import { ReactComponent as ArrowSVG } from './assets/arrow.svg';

function App() {
  return (
    <div className="App">
      <Header/>
    
      <div className='content'>
        <SocialSection/>
        <EmailSection/>
        <a className='scrolltotop' href='#'><ArrowSVG/></a>

        <Intro/>
        <About/>
        
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
