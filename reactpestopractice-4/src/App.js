
import './App.css';
import Customhook1 from './Components/customhook/Customhook1';
import Customhook2 from './Components/customhook/Customhook2';
import Counter1 from './Components/useReducer/Counter1';
import Counter2 from './Components/useReducer/Counter2';

function App() {
  return (
    <div className="App">
        <Counter1/>
        <Counter2/>
        <Customhook1/>
        <Customhook2/>
    </div>
  );
}

export default App;
