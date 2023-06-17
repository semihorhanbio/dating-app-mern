import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <DatingCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
