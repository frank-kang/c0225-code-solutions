import { useState } from 'react';

type Props = {
  caption: string[];
};
export function Caption({ caption }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }
  return <h3 onClick={handleClick}>{caption[index]}</h3>;
}
