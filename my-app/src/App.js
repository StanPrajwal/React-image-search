import "./App.css";
import { Route, Routes } from "react-router-dom";
import Image from "./Components/Image";
import Bookmark from "./Components/Bookmark";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Image />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
