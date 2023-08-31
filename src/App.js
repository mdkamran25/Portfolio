import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Project from "./Component/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About /> } />
          <Route path="portfolio" element={<Project /> } />
          <Route path="contact" element={<Contact /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
