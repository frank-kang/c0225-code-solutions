import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const text: string = 'Beautiful Picture of Space';
const source: string = '/starry-sky.jpeg';
const caption: string = 'A beautiful Image of Space';
const description: string =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const buttonText: string = 'Click for next image';

export default function App() {
  return (
    <>
      <Header text={text} />
      <Image source={source} />
      <Caption caption={caption} />
      <Description description={description} />
      <Button text={buttonText} />
    </>
  );
}
