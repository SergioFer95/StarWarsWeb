import './main.scss';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// COMPONENTS:
import Header from './components/Header/Header';

// PAGES:
import Characters from './pages/Characters/Characters';
import Home from './pages/Home/Home';
import Films from './pages/Films/Films';
// import Contact from './pages/Contact/Contact';
import SingleCharacterInfo from './pages/SingleCharacterInfo/SingleCharacterInfo';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import InfoEpisodeI from './pages/Films/InfoEpisodeI/InfoEpisodeI';


function App() {
  return (
    <div className="app">
      <Router>

        <Header />

        <Routes>

          <Route path='/' element={<Login />}/>
          <Route path='Home' element={<Home />}/>
          <Route path='Characters' element={<Characters />}/>
          <Route path='SingleCharacter/:id' element={<SingleCharacterInfo />}/>
          <Route path='Films' element={<Films />}/>

          <Route path='Films/:EpisodeI' element={<InfoEpisodeI />}/>
          {/* <Route path='Episode-II' element={<InfoEpisodeII />}/>
          <Route path='Episode-III' element={<InfoEpisodeIII />}/>
          <Route path='Episode-VI' element={<InfoEpisodeIV />}/>
          <Route path='Episode-V' element={<InfoEpisodeV />}/>
          <Route path='Episode-VI' element={<InfoEpisodeVI />}/> */}

        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
