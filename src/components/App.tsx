import React from 'react';

import { FaBars, FaChevronLeft } from 'react-icons/fa6';
import { Route, Routes, useLocation } from 'react-router-dom';

import Hand from './Cards/Hand';
import Hangman from './Hangman';
import Home from './Home';
import Sidebar from './Sidebar/Sidebar';

function App() {
  const [sidebarVisible, setSidebarVisible] = React.useState<boolean>();
  const [isMobile, setIsMobile] = React.useState<boolean>();
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    setSidebarVisible(width >= 768);
    setIsMobile(width < 768);
  }, [width]);

  const location = useLocation();
  React.useEffect(() => {
    if (isMobile) {
      setSidebarVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const toggleSidbar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="dark:text-white dark:bg-slate-600 container max-w-full min-h-screen h-100 flex">
      <button
        type="button"
        className={`fixed z-20 top-6 border-2 rounded p-0.5 left-2 transition-transform ${
          sidebarVisible ? '' : 'rotate-180'
        }`}
        onClick={toggleSidbar}
      >
        {sidebarVisible && <FaChevronLeft />}
        {!sidebarVisible && <FaBars />}
      </button>
      <div
        className={`transition-transform fixed z-10
          ${isMobile ? 'w-screen' : 'w-64'}
          ${sidebarVisible ? '' : '-translate-x-full'}`}
      >
        <Sidebar />
      </div>
      <div
        className={`flex-auto z-0 ${
          !sidebarVisible || isMobile ? 'ml-0' : 'ml-64'
        }`}
      >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cards" Component={Hand} />
          <Route path="/hangman" Component={Hangman} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
