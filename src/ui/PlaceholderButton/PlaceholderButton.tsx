import { classNames } from "@/utils";
import styles from "./placeholderButton.module.css";

interface P {
  isBig?: boolean;
  isGreen?: boolean;
}

export const PlaceholderButton = ({ isBig = false, isGreen = false }: P) => (
  <div
    className={classNames(styles.wrapper, {
      [styles.big]: isBig,
      [styles.green]: isGreen,
    })}
  />
);
