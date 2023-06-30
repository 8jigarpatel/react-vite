import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';
import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';

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
      className="border-slate-200 dark:border-slate-600 p-5 text-2xl rounded-md flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 w-full"
    >
      <Icon />
      {text}
    </button>
  );
}

BigButton.defaultProps = {
  onClick: null,
};

function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-300 flex-1 m-3 rounded-md p-3">Chart</div>
      <div className="flex flex-row flex-wrap gap-3 p-3">
        <div className="w-64">
          <BigButton text="New Product" icon={FaPlus} />
        </div>
        <div className="w-64">
          <BigButton text="New Service" icon={FaPlus} />
        </div>
        <div className="w-64">
          <BigButton text="Find Service" icon={FaMagnifyingGlass} />
        </div>
        <div className="w-64">
          <BigButton text="Find Service" icon={FaMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
}

export default Home;
