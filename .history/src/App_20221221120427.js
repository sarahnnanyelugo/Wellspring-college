import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes> <Route path="/" element={<Ho />} />
    </BrowserRouter>
  );
}

export default App;
