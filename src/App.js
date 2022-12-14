import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Main from "./pages/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <Main />
      <Features />
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
