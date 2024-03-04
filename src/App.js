
import './App.css';
import './Mostpopular.css'
import './TopReads.css'
import './FeaturedTopics.css'
import './Browse.css'
import './Recently.css'
import Navbar from './component/Navbar'; // Importing from the folder will automatically look for index.js
import SecondHeader from './component/SecondNavbar';
import BodyContent  from './component/BodyContent'
import Fooder from './component/Footer/Fooder';
import MostPopular from './component/BodyContent/MostPopular';
import AutoPlay from './component/BodyContent/Autoplay';
import TopReads from './component/BodyContent/TopReads';
import FeaturedTopics from './component/BodyContent/Featured Topics';
import Browse from './component/BodyContent/Browse';
import Recently from './component/BodyContent/Recently';

function App() {
  return (
    <div className="App">
      <div className="App-header">
         <Navbar/>
         <SecondHeader/>
         <BodyContent/>
         <MostPopular/>
         <FeaturedTopics/>
         
         <TopReads/>
         <Recently/>
         <Browse/>
         <Fooder/>
      </div>
    </div>
  );
}

export default App;
