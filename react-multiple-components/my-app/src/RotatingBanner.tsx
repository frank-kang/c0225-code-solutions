import { useState } from 'react';

type Props = {
  items: string[];
};
export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(4);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrev={handlePrev} />
      <Indicators
        count={items.length}
        current={currentIndex}
        onSelect={handleSelect}
      />
      <NextButton onNext={handleNext} />
    </div>
  );
}

type BannerProps = {
  item: string;
};
function Banner({ item }: BannerProps) {
  return <h1>{item}</h1>;
}

type PrevProps = {
  onPrev: () => void;
};
function PrevButton({ onPrev }: PrevProps) {
  return <button onClick={onPrev}>Prev</button>;
}

type IndicatorsProps = {
  count: number;
  current: number;
  onSelect: (index: number) => void;
};
function Indicators({ count, current, onSelect }: IndicatorsProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        onClick={() => onSelect(i)}
        key={i}
        style={{ backgroundColor: i === current ? 'lightblue' : 'white' }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}

type NextProps = {
  onNext: () => void;
};
function NextButton({ onNext }: NextProps) {
  return <button onClick={onNext}>Next</button>;
}
