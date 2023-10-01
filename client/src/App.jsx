import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import Detail from './views/Detail/Detail';
import FormCreate from './views/FormCreate/FormCreate';


function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<FormCreate/>}/>
      </Routes>

    </div>
  );
}

export default App;
