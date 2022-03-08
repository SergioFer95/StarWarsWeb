import './main.scss';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// COMPONENTS:
import Header from './components/Header/Header';

// PAGES:
import Characters from './pages/Characters/Characters';
import Home from './pages/Home/Home';
import Films from './pages/Films/Films';
import Contact from './pages/Contact/Contact';
import SingleCharacterInfo from './pages/SingleCharacterInfo/SingleCharacterInfo';
// import Login from './pages/Login/Login';


function App() {
  return (
    <div className="app">
      <Router>

        <Header />

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='Characters' element={<Characters />}/>
          <Route path='Films' element={<Films />}/>
          <Route path='LogIn' element={<Contact />}/>
          {/* <Login /> */}

        </Routes>

        <SingleCharacterInfo />

      </Router>
    </div>
  );
}

export default App;
