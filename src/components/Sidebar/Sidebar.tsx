import React from 'react';
import { NavLink } from 'react-router-dom';

import { CgCardSpades } from 'react-icons/cg';
import {
  FaBilibili,
  FaPaintRoller,
  FaPowerOff,
  FaSignHanging,
} from 'react-icons/fa6';

import SidebarButton from './SidebarButton';
import SidebarLink from './SidebarLink';
import SidebarSection from './SidebarSection';

function Sidebar() {
  const [theme, setTheme] = React.useState<string>(
    window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );

  React.useEffect(() => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((thm) => {
      return thm === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <div className="flex">
      <div className="min-w-full min-h-screen bg-slate-100 dark:bg-slate-700 p-2 flex flex-col gap-3">
        <div className="flex">
          <NavLink
            to="/"
            className="text-center text-xl font-semibold flex items-center mx-auto py-3 gap-3 hover:font-bold"
          >
            <FaBilibili />
            React App
          </NavLink>
        </div>
        <div>
          <SidebarSection text="Games" />
          <SidebarLink text="Hangman" to="/hangman" icon={FaSignHanging} />
          <SidebarLink text="Cards" to="/cards" icon={CgCardSpades} />
        </div>
        <div>
          <SidebarSection text="account" />
          <SidebarButton
            text="Log Out"
            onClick={() => {}}
            icon={FaPowerOff}
            classNames="text-white bg-red-500 dark:bg-red-600 hover:bg-red-700 dark:hover:bg-red-700"
          />
        </div>
        <div className="">
          <SidebarSection text="options" />
          <SidebarButton
            text="Toggle Theme"
            icon={FaPaintRoller}
            onClick={toggleTheme}
          />
        </div>
        <div className="bottom-0 text-center opacity-25 text-sm">
          version: v0.1
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
