import './App.css';
import {Routes, Route} from 'react-router-dom'
import TutorialsList from './components/TutorialsList';
import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TutorialsList />} />
        <Route path='/add' element={<AddTutorial />} />
        <Route path='/products/:id' element={<Tutorial />} />
      </Routes>
    </div>
  );
}

export default App;
