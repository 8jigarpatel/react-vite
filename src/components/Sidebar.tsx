import React, { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';
import {
  FaBilibili,
  FaBoxArchive,
  FaCalendarCheck,
  FaGear,
  FaPaintRoller,
  FaPowerOff,
  FaUser,
} from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

function SidebarSection(props: { text: string }) {
  const { text } = props;
  return (
    <div className="text-xs border-t-2 border-slate-200 dark:border-slate-600 uppercase font-bold pt-2 opacity-40">
      {text}
    </div>
  );
}

interface SidebarItemProps {
  text: string;
  icon: IconType;
  onClick?: MouseEventHandler;
  classNames?: string;
}

function SidebarItem(props: SidebarItemProps) {
  const { onClick, text, classNames, icon: Icon } = props;

  return (
    <button
      type="button"
      className={`p-2 my-1 w-full rounded-md transition-all text-left hover:bg-slate-300 dark:hover:bg-slate-900 flex items-center gap-2 ${classNames}`}
      onClick={onClick}
    >
      <Icon />
      {text}
    </button>
  );
}

SidebarItem.defaultProps = {
  classNames: '',
  onClick: null,
};

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
      <div className="min-w-full min-h-screen bg-slate-100 dark:bg-slate-700 p-2 flex flex-col gap-3 transition-all">
        <div className="flex">
          <NavLink
            to="/"
            className="text-center text-xl font-semibold flex items-center mx-auto py-3 gap-3 hover:underline"
          >
            <FaBilibili />
            Cool React App
          </NavLink>
        </div>
        <div>
          <SidebarSection text="New" />
          <SidebarItem text="Product" icon={FaBoxArchive} />
          <SidebarItem text="Service" icon={FaCalendarCheck} />
        </div>
        <div>
          <SidebarSection text="Search" />
          <SidebarItem text="Products" icon={FaBoxArchive} />
          <SidebarItem text="Services" icon={FaCalendarCheck} />
        </div>
        <div>
          <SidebarSection text="Configure" />
          <SidebarItem text="App Settings" icon={FaGear} />
          <SidebarItem text="Products" icon={FaBoxArchive} />
          <SidebarItem text="Services" icon={FaCalendarCheck} />
        </div>
        <div>
          <SidebarSection text="account" />
          <SidebarItem
            text="Edit Profile"
            icon={FaUser}
            onClick={() => {
              return false;
            }}
          />
          <SidebarItem
            text="Log Out"
            icon={FaPowerOff}
            classNames="text-white bg-red-500 dark:bg-red-600 hover:bg-red-700 dark:hover:bg-red-700"
          />
        </div>
        <div className="">
          <SidebarSection text="options" />
          <SidebarItem
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
