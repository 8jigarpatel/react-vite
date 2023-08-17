import Card from './Card';

function Hand() {
  const cards = [
    { suite: 'c', rank: 'K' },
    { suite: 'd', rank: '10' },
    { suite: 's', rank: 'A' },
    { suite: 'h', rank: '2' },
  ];

  const card = cards.map((c) => {
    return (
      <div
        key={c.suite + c.rank}
        className="hover:-translate-y-5 transition-transform"
      >
        <Card suite={c.suite} rank={c.rank} />
      </div>
    );
  });

  return <div className="p-2 flex flex-wrap gap-10">{card}</div>;
}

export default Hand;
