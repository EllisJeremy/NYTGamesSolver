import styles from "./SelectGameButton.module.css";

export default function SelectGameButton({
  imageAddress,
  backgroundColor,
}: {
  imageAddress: string;
  backgroundColor: string;
}) {
  return <button style={{ backgroundColor }}>wordle</button>;
}
