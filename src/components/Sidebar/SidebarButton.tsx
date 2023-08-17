import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

interface SidebarButtonProps {
  text: string;
  icon: IconType;
  onClick: MouseEventHandler;
  classNames?: string;
}

function SidebarButton(props: SidebarButtonProps) {
  const { onClick, text, classNames, icon: Icon } = props;

  return (
    <button
      type="button"
      className={`p-2 my-1 w-full rounded-md text-left hover:bg-slate-300 dark:hover:bg-slate-900 flex items-center gap-2 ${classNames}`}
      onClick={onClick}
    >
      <Icon />
      {text}
    </button>
  );
}

SidebarButton.defaultProps = {
  classNames: '',
};

export default SidebarButton;
