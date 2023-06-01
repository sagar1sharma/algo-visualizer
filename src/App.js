import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import SortingPage from './pages/sortpage';
import SearchingPage from './pages/searchpage';
import GraphPage from './pages/graphpage';

function App() {
  return (
    <div className='app'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/sorting' element={<SortingPage />} />
          <Route path='/searching' element = {<SearchingPage />} />
          <Route path='/graph' element = {<GraphPage />} />
        </Routes>
    </div>
  );
}

export default App;
