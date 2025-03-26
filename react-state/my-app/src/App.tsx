import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs: string[] = [
  '/starry-sky.jpeg',
  '/cool-car.jpg',
  '/cool-kitty.jpg',
  'humming-bird.jpg',
  'rabbit.jpg',
];

const captions: string[] = [
  'A Beautiful Image of Space',
  'nice car!',
  'cute kitty!',
  'humming bird!',
  'cute rabbits!',
];
const descriptions: string[] = [
  'I love stars!',
  'what a fast looking car!',
  'that cat needs a home!',
  'humming birds ae so cool',
  'i love rabbits!',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description texts={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
