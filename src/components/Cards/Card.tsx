import { IconType } from 'react-icons';
import {
  CgCardClubs,
  CgCardDiamonds,
  CgCardHearts,
  CgCardSpades,
  CgUser,
} from 'react-icons/cg';

interface CardProps {
  suite: string;
  rank: string;
}

function Card(props: CardProps) {
  const { suite, rank } = props;

  let SuiteIcon: IconType = CgUser;
  switch (suite) {
    case 's':
      SuiteIcon = CgCardSpades;
      break;
    case 'c':
      SuiteIcon = CgCardClubs;
      break;
    case 'd':
      SuiteIcon = CgCardDiamonds;
      break;
    case 'h':
      SuiteIcon = CgCardHearts;
      break;
    default:
      break;
  }

  return (
    <div className="text-black bg-white shadow-lg rounded-lg p-2 w-44 h-64 border border-gray-300">
      <div className="flex flex-col items-center gap-1 max-w-fit">
        <div className="text-3xl font-bold">{rank}</div>
        <div className="text-3xl font-bold">
          <SuiteIcon />
        </div>
      </div>
    </div>
  );
}

export default Card;
