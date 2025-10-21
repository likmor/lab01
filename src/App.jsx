import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router";
import Lab01 from "./pages/Lab01";
import Lab02 from "./pages/Lab02";
import Lab03 from "./pages/Lab03";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="lab01" element={<Lab01></Lab01>}></Route>
        <Route path="lab02" element={<Lab02 />} />
        <Route path="lab02/:id" element={<Lab02 />} />
        <Route path="lab03" element={<Lab03 />} />
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
