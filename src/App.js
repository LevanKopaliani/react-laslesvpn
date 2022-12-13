import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <Main />
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
