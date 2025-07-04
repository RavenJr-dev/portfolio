import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Notfound } from "./pages/Notfound";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
