import Card from './Card';

function Hand() {
  return (
    <>
      <Card suite="s" rank="A" />
      <Card suite="c" rank="K" />
      <Card suite="d" rank="Q" />
      <Card suite="h" rank="10" />
    </>
  );
}

export default Hand;
