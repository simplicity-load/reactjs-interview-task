import { Button } from "@/components";
import { useNotes } from "@/context";
import { PlaceholderButton } from "./PlaceholderButton";
import styles from "./form.module.css";

export const Form = () => {
  const {
    editingNote: note,
    changeNote,
    submitNote,
    deleteNote,
    isCreatingNote,
  } = useNotes();
  if (!note) return;
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
        <input
          value={note?.head}
          className={styles.title}
          placeholder="Add a title"
          onChange={({ target: { value } }) =>
            changeNote({ ...note, head: value })
          }
        />
        <hr className={styles.separator} />
        <textarea
          value={note?.body}
          className={styles.body}
          placeholder="Write your note here..."
          onChange={({ target: { value } }) =>
            changeNote({ ...note, body: value })
          }
        />
      </div>
      <div className={styles.footer}>
        <Button label="Save Note" icon="save" onClick={submitNote} />
        {!isCreatingNote && (
          <Button
            label="Delete Note"
            icon="delete"
            isRed
            onClick={deleteNote}
          />
        )}
      </div>
    </div>
  );
};
