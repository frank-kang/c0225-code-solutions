type Props = {
  label: string;
  onNext: () => void;
};
export function Button({ label, onNext }: Props) {
  function handleClick() {
    onNext();
  }
  return <button onClick={handleClick}>{label}</button>;
}
