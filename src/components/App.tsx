import React from 'react';
import { FaBars } from 'react-icons/fa6';
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
    setSidebarVisible(width >= 640);
    setIsMobile(width < 640);
  }, [width]);

  const toggleSidbar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="container min-w-full h-screen flex dark:text-white dark:bg-slate-600">
      <div
        className={`absolute transition-all ${isMobile ? 'w-screen' : 'w-64'}`}
      >
        <div className={`transition-all ${sidebarVisible ? '' : 'hidden'}`}>
          <Sidebar />
        </div>
        <button
          type="button"
          className={`absolute top-6 left-3 ${isMobile ? '' : 'hidden'}`}
          onClick={toggleSidbar}
        >
          <FaBars />
        </button>
      </div>
      <div className={`${isMobile ? '' : 'ml-64'}`}>
        <Routes>
          <Route index Component={Home} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
