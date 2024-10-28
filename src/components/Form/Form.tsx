import { useNotes } from "@/context";
import { Button, PlaceholderButton } from "@/ui";
import styles from "./form.module.css";

export const Form = () => {
  const {
    editingNote: note,
    changeNote,
    submitNote,
    deleteNote,
    isCreatingNote,
  } = useNotes();
  if (!note) return <div>Empty Note</div>;
  return (
    <div className={styles.wrapper} aria-label="form">
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
          aria-label="input title"
          value={note?.head}
          className={styles.title}
          placeholder="Add a title"
          onChange={({ target: { value } }) =>
            changeNote({ ...note, head: value })
          }
        />
        <hr className={styles.separator} />
        <textarea
          aria-label="input body"
          value={note?.body}
          className={styles.body}
          placeholder="Write your note here..."
          onChange={({ target: { value } }) =>
            changeNote({ ...note, body: value })
          }
        />
      </div>
      <div className={styles.footer}>
        <Button
          ariaLabel="save changes"
          label="Save Note"
          icon="save"
          onClick={submitNote}
        />
        {!isCreatingNote && (
          <Button
            ariaLabel="delete note"
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
