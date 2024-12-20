import Main from "./components/Main";
import MovieGame from "./components/MovieGame";
import Memo from "./components/Memo";
import Test from "./components/Test";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<MovieGame />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
