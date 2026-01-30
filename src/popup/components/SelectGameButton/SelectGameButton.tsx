import styles from "./SelectGameButton.module.css";

export type SelectGameButtonProps = {
  imageAddress: string;
  backgroundColor: string;
};
export default function SelectGameButton({
  imageAddress,
  backgroundColor,
}: SelectGameButtonProps) {
  return (
    <button
      style={{
        backgroundColor,
      }}
    >
      <img src={imageAddress} />
    </button>
  );
}
