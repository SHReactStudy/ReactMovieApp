import Main from "./presentation/screens/Main";
import MovieGame from "./presentation/screens/MovieGame";
import Memo from "./presentation/screens/Memo";
import Test from "./presentation/screens/Test";

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
