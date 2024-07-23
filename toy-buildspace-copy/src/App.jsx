import React, { createContext, useEffect, useState, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const Docs = lazy(() => import('./Components/Docs'));
const Layout = lazy(() => import('./Components/Layout'));
const NotFoundPage = lazy(() => import('./Components/NotFoundPage'));

export const ThemeContext = createContext();

function App() {
  function isMobile() {
    return navigator.maxTouchPoints > 0 && /Android|iPhone/i.test(navigator.userAgent);
  }

  const [size, setSize] = useState(20);

  useEffect(() => isMobile, []);

  if (isMobile()) {
    return (
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout size={-5} marginSize={-1} sidebarSize={50}/>}>
            <Route path='' element={<Home />}/>
            <Route path=':language/:name' element={<Docs />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
    );
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout size={size} />}>
            <Route path='' element={<Home />}/>
            <Route path=':language/:name' element={<Docs />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
