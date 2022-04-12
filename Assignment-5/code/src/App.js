import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PostviewPage from './PostviewPage';
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
            <Route path='*' element={<LandingPage/>}/>
            <Route path='./PostviewPage.js'element={<PostviewPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;