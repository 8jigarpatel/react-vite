import React, { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";
import { FaBilibili, FaUser, FaPowerOff, FaBars, FaPaintRoller } from "react-icons/fa6";

function Sidebar() {
  const [theme, setTheme] = React.useState<string>('light');
  const [visible, setVisible] = React.useState<boolean>();
  const [dynamicSidebarClass, setDynamicSidebarClass] = React.useState('');
  const [dynamicTogglerClass, setDynamicTogglerClass] = React.useState('');

  React.useEffect(() => {
    setVisible(window.innerWidth >= 640);
  }, []);

  React.useEffect(() => {
    setDynamicSidebarClass(visible ? 'ml-0' : '-ml-64');
    setDynamicTogglerClass(visible ? '-ml-4' : 'absolute ml-0');
  }, [visible]);

  React.useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
    else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const toggleSidbar = () => {
    setVisible(!visible);
  };

  const toggleTheme = () => {
    setTheme((thm) => { return thm === 'light' ? 'dark' : 'light' });
  };

  return (
    <>
      <div className="flex h-full">
        <div className={`bg-slate-100 dark:bg-slate-700 dark:divide-slate-900 p-2 w-64 flex flex-col gap-3 transition-all divide-y ${dynamicSidebarClass}`}>
          <NavLink to="/" className="text-center text-xl font-semibold flex items-center mx-auto py-3 gap-3 hover:underline">
            <FaBilibili />
            Cool React App
          </NavLink>
          <div>
            <SidebarSection text='Configure' />
            <SidebarItem text='App Settings' icon={FaUser} onClick={() => { return false; }} />
            <SidebarItem text='Products' icon={FaUser} onClick={() => { return false; }} />
            <SidebarItem text='Services' icon={FaUser} onClick={() => { return false; }} />
          </div>
          <div>
            <SidebarSection text='account' />
            <SidebarItem text='Edit Profile' icon={FaUser} onClick={() => { return false; }} />
            <SidebarItem text='Log Out' icon={FaPowerOff} onClick={() => { return false; }} classNames="text-white bg-red-500 hover:bg-red-700 dark:hover:bg-red-700" />
          </div>
          <div className="">
            <SidebarSection text='options' />
            <SidebarItem text='Toggle Theme' icon={FaPaintRoller} onClick={toggleTheme} />
          </div>
        </div>
        <button className={`self-start transition-all ${dynamicTogglerClass}`} type="button" onClick={toggleSidbar}> <FaBars /> </button>
      </div>
    </>
  )
}

const SidebarSection = (props: { text: string }) => {
  return (
    <div className="text-xs uppercase font-bold pt-2 opacity-40">{props.text}</div>
  );
};

const SidebarItem = (props: { text: string, icon: IconType, onClick: MouseEventHandler, classNames?: string }) => {
  return (
    <button type="button" className={`p-2 my-1 w-full rounded-md transition-all text-left hover:bg-slate-300 dark:hover:bg-slate-900 flex items-center gap-2 ${props.classNames}`} onClick={props.onClick}>
      {<props.icon />}
      {props.text}
    </button>
  );
};

export default Sidebar
