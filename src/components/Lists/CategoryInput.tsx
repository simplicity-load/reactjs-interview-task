import { Button } from "../Button";
import styles from "./categoryInput.module.css";

export const CategoryInput = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Add a title..." />
      <Button icon="save" />
      <Button icon="close" isRed />
    </div>
  );
};
