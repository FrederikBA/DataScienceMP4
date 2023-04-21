import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NoMatch from './views/NoMatch';
import VisualizationOne from './views/VisualizationOne';
import VisualizationTwo from './views/VisualizationTwo';
import VisualizationThree from './views/VisualizationThree';
import VisualizationFour from './views/VisualizationFour';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<VisualizationOne />} />
        <Route path='/predict' element={<VisualizationTwo />} />
        <Route path='/3d' element={<VisualizationThree />} />
        <Route path='/victory' element={<VisualizationFour />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div >
  );
}

export default App;
