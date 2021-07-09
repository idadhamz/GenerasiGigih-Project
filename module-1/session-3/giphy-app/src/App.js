import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dadi Ilham Setiadi - Giphy App</h1>
      <p>Value ENV : {process.env.REACT_APP_GIPHY_APP_KEY}</p>
    </div>
  );
}

export default App;
