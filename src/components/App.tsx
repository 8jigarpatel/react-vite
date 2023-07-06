import React from 'react';
import { FaBars, FaChevronLeft } from 'react-icons/fa6';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sidebar from './Sidebar';

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

  const toggleSidbar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="dark:text-white dark:bg-slate-600 container max-w-full h-screen flex">
      <div
        className={`absolute transition-all ${isMobile ? 'w-screen' : 'w-64'}`}
      >
        <div
          className={`transition-all ${
            sidebarVisible ? '' : '-translate-x-full'
          }`}
        >
          <Sidebar />
        </div>
        <button
          type="button"
          className={`absolute top-6 left-3 transition-all ${
            sidebarVisible ? '' : 'rotate-180'
          }`}
          onClick={toggleSidbar}
        >
          {sidebarVisible && <FaChevronLeft />}
          {!sidebarVisible && <FaBars />}
        </button>
      </div>
      <div
        className={`transition-all flex-auto ${
          !sidebarVisible || isMobile ? '' : 'ml-64'
        }`}
      >
        <Routes>
          <Route index Component={Home} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
