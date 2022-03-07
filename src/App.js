import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
