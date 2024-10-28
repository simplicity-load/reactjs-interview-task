import { useNotes } from "@/context";
import { type Note as TNote } from "@/store";
import { classNames } from "@/utils";
import styles from "./note.module.css";

interface P {
  note: TNote;
}

export const Note = ({ note }: P) => {
  const { selectNote, isNoteSelected, isEditingNote } = useNotes();
  const isSelected = isNoteSelected(note.id);
  const isDisabled = isEditingNote && !isSelected;
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.selected]: isSelected,
        [styles.disabled]: isDisabled,
      })}
      onClick={() => selectNote(note)}
    >
      <div className={styles.head}>{note.head}</div>
      <div className={styles.body}>{note.body}</div>
    </div>
  );
};
