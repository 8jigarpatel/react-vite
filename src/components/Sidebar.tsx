import React, { MouseEventHandler } from "react";
import { IconType } from "react-icons";
import { FaBars, FaBilibili, FaBoxArchive, FaCalendarCheck, FaGear, FaPaintRoller, FaPowerOff, FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [theme, setTheme] = React.useState<string>();
  // const [mobileMode, setMobileMode] = React.useState<boolean>();
  const [sidebarVisible, setSidebarVisible] = React.useState<boolean>();
  const [dynamicSidebarClass, setDynamicSidebarClass] = React.useState('');
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const thm = window.localStorage.getItem("theme");
    if (thm === 'dark') {
      setTheme('dark');
    }
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
    // setMobileMode(width < 640); 
  }, [width]);

  React.useEffect(() => {
    setDynamicSidebarClass(sidebarVisible ? 'ml-0' : '-ml-64');
  }, [sidebarVisible]);

  React.useEffect(() => {
    if (theme === 'dark') {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add('dark');
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleSidbar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleTheme = () => {
    setTheme((thm) => { return thm === 'light' ? 'dark' : 'light' });
  };

  return (
    <>
      <div className="flex h-full">
        <div className={`bg-slate-100 dark:bg-slate-700 dark:divide-slate-800 p-2 flex flex-col gap-3 transition-all divide-y w-64 ${dynamicSidebarClass}`}>
          <div className="flex">
            <NavLink to="/" className="text-center text-xl font-semibold flex items-center mx-auto py-3 gap-3 hover:underline">
              <FaBilibili />
              Cool React App
            </NavLink>
            {sidebarVisible &&
            <button className={`transition-all`} type="button" onClick={toggleSidbar}> <FaBars /> </button>
            }
          </div>
          <div>
            <SidebarSection text='Configure' />
            <SidebarItem text='App Settings' icon={FaGear} onClick={() => { return false; }} />
            <SidebarItem text='Products' icon={FaBoxArchive} onClick={() => { return false; }} />
            <SidebarItem text='Services' icon={FaCalendarCheck} onClick={() => { return false; }} />
          </div>
          <div>
            <SidebarSection text='account' />
            <SidebarItem text='Edit Profile' icon={FaUser} onClick={() => { return false; }} />
            <SidebarItem text='Log Out' icon={FaPowerOff} onClick={() => { return false; }} classNames="text-white bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-800" />
          </div>
          <div className="">
            <SidebarSection text='options' />
            <SidebarItem text='Toggle Theme' icon={FaPaintRoller} onClick={toggleTheme} />
          </div>
        </div>
        {(!sidebarVisible) &&
         <button className="self-start transition-all absolute top-2 left-2" type="button" onClick={toggleSidbar}> <FaBars /> </button>
         }
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
