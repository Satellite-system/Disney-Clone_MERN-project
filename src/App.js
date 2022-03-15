import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';
import Details from "./Components/Details";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <BrowserRouter>
      <Header />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route exact path="/home" element={<Home setProgress={setProgress}/>} />
      
        <Route exact path="/"element={<Login />} />
      
        <Route path="/detail/:id" element={<Details setProgress={setProgress}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
