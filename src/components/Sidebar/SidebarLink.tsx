import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface SidebarLinkProps {
  text: string;
  icon: IconType;
  to: string;
  classNames?: string;
}

function SidebarLink(props: SidebarLinkProps) {
  const { to, text, classNames, icon: Icon } = props;

  return (
    <NavLink
      key={text}
      to={to}
      className={({ isActive }) =>
        `p-2 my-1 w-full rounded-md text-left hover:bg-slate-300 dark:hover:bg-slate-900 flex items-center gap-2 ${classNames} ${
          isActive ? 'font-bold italic' : ''
        }`
      }
    >
      <Icon />
      {text}
    </NavLink>
  );
}

SidebarLink.defaultProps = {
  classNames: '',
};

export default SidebarLink;
