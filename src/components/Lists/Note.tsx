import { type Note as TNote } from "@/hooks";
import styles from "./note.module.css";
import { classNames } from "@/utils";

interface P {
  note: TNote;
  isSelected?: boolean;
}

export const Note = ({ note: { head, body }, isSelected = false }: P) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.selected]: isSelected,
      })}
    >
      <div className={styles.head}>{head}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};
