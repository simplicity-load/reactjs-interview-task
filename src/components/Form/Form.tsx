import { Button } from "@/components";
import { PlaceholderButton } from "./PlaceholderButton";
import styles from "./form.module.css";

export const Form = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <PlaceholderButton isBig />
          <PlaceholderButton isBig />
          <PlaceholderButton isBig isGreen />
        </div>
        <div className={styles.rightHeader}>
          <PlaceholderButton />
          <PlaceholderButton />
          <PlaceholderButton />
        </div>
      </div>
      <div className={styles.form}>
        <input className={styles.title} placeholder="Add a title" />
        <hr className={styles.separator} />
        <textarea
          className={styles.body}
          placeholder="Write your note here..."
        />
      </div>
      <div className={styles.footer}>
        <Button label="Save Note" icon="save" />
        <Button label="Delete Note" icon="delete" isRed />
      </div>
    </div>
  );
};
