import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';
import Details from "./Components/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
