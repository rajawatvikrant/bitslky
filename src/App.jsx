import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/account" element={<AccountPage />} />   
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
