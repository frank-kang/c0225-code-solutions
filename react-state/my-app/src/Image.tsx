import './Image.css';
import { useState } from 'react';

type Props = {
  srcs: string[];
};
export function Image({ srcs }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={handleClick}
          src={srcs[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
