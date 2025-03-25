import './Image.css';

type Props = {
  source: string;
};

export function Image({ source }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={source} alt="space-image" />
      </div>
    </div>
  );
}
