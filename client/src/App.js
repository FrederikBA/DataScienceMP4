import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import VisualizationOne from './views/VisualizationOne';
import VisualizationTwo from './views/VisualizationTwo';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<VisualizationOne />} />
        <Route path='/predict' element={<VisualizationTwo />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div >
  );
}

export default App;
