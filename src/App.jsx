import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header, Footer} from "./components";
import {Home, Aboutus, Feedback, Dictionary, Learn, LearnPage, Alphabet, WebcamPage} from "./pages";
import "./App.css";

function App() {
  return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/alphabet" element={<Alphabet />} />
            <Route path="/learn/alphabet/:page" element={<WebcamPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>;
}

export default App;
