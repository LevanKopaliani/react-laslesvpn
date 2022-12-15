import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Features from "./pages/Features";
import Header from "./components/Header";
import Main from "./pages/Main";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Reviews from "./pages/Reviews";

const Layout = () => {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Pricing />
      <Testimonials />
      <Reviews />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
