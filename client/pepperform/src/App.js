import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();
const handel=()=>{
  navigate("/form");
}
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={()=>{handel()}}>create a form</button>
      </header>
    </div>
  );
}

export default App;
