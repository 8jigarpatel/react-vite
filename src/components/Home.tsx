import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

import { CgCardSpades } from 'react-icons/cg';
import { FaSignHanging } from 'react-icons/fa6';

interface BigButtonProps {
  text: string;
  icon: IconType;
  onClick?: MouseEventHandler;
}

function BigButton(props: BigButtonProps) {
  const { text, onClick, icon: Icon } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-slate-200 dark:border-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 h-full p-2 md:p-5 text-md md:text-2xl rounded-md flex items-center justify-center gap-2 w-full"
    >
      <div>
        <Icon />
      </div>
      {text}
    </button>
  );
}

BigButton.defaultProps = {
  onClick: null,
};

interface SidebarItemProps {
  text: string;
  icon: IconType;
  to: string;
}

function SidebarItem(props: SidebarItemProps) {
  const { to, text, icon: Icon } = props;

  return (
    <NavLink
      key={text}
      to={to}
      className="border-slate-200 dark:border-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 h-full p-2 md:p-5 text-md md:text-2xl rounded-md flex items-center justify-center gap-2 w-full"
    >
      <Icon />
      {text}
    </NavLink>
  );
}

function Home() {
  return (
    <div className="flex flex-col h-full p-3">
      <div className="text-5xl text-center flex-auto">Welcome!</div>
      <div className="flex flex-row flex-wrap">
        <div className="w-1/2 p-2">
          <SidebarItem text="Hangman" to="/hangman" icon={FaSignHanging} />
        </div>
        <div className="w-1/2 p-2">
          <SidebarItem text="Cards" to="/cards" icon={CgCardSpades} />
        </div>
      </div>
    </div>
  );
}

export default Home;
