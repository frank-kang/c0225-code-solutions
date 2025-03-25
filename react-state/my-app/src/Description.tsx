import { useState } from 'react';

type Props = {
  text: string[];
};

export function Description({ text }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }
  return <p onClick={handleClick}>{text[index]}</p>;
}
