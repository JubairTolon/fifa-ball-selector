import './App.css';
import Selector from './components/ballSelector/Selector';
import HowReactWorks from './components/howReactWorks/HowReactWorks';

function App() {
  return (
    <div>
      <div className='header'>
        <h2>FIFA Ball Selector</h2>
      </div>
        <Selector></Selector>
        <HowReactWorks></HowReactWorks>
    </div>
  );
}

export default App;
