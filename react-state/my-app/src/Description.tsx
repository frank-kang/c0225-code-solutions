import { useState } from 'react';

type Props = {
  texts: string[];
};

export function Description({ texts }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }
  return <p onClick={handleClick}>{texts[index]}</p>;
}
