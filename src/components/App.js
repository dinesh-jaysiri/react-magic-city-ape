import {Route, Routes} from "react-router-dom"
import Footer from "./Footer";
import Home from "./Home";
import MintPage from "./MintPage";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/mint" element ={<MintPage />} >
        </Route>
        <Route path="/" element = {<Home />} >
        </Route>
        <Route path="*" element={<Home />} >
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
