import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Callback from './components/callback';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/callback' element={<Callback />} />
      </Routes>
    </Router>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

      <App />
)