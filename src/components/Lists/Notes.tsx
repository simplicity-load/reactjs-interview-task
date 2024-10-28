import { Button, NoData, Search } from "@/components";
import { useNotes } from "@/context";
import { classNames } from "@/utils";
import { Note } from "./Note";
import styles from "./notes.module.css";

export const Notes = () => {
  const { notes, startNote, searchNotes, isAnyNoteSelected } = useNotes();
  return (
    <div className={styles.notes}>
      <div
        className={classNames(styles.header, {
          [styles.shortHeader]: isAnyNoteSelected,
        })}
      >
        <Button label="Create Note" icon="plus" onClick={startNote} />
        <Search placeholder="Search" onSearch={searchNotes} />
      </div>
      <div className={styles.list}>
        {notes && notes.length !== 0 ? (
          notes.map((note) => <Note key={note.id} note={note} />)
        ) : (
          <NoData label="Create a note" /> // on search
        )}
      </div>
    </div>
  );
};
