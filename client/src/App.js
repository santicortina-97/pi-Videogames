import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import Detail from './views/Detail/Detail';


function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/home/detail/:id' element={<Detail/>}/>
      </Routes>

    </div>
  );
}

export default App;
