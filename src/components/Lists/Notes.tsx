import { useNotes } from "@/context";
import { Button, NoData, Search } from "@/ui";
import { classNames } from "@/utils";
import { Note } from "./Note";
import styles from "./notes.module.css";

export const Notes = () => {
  const { notes, startNote, searchNotes, isAnyNoteSelected } = useNotes();
  return (
    <div aria-label="notes" className={styles.notes}>
      <div
        className={classNames(styles.header, {
          [styles.shortHeader]: isAnyNoteSelected,
        })}
      >
        <Button
          ariaLabel="create note"
          label="Create Note"
          icon="plus"
          onClick={startNote}
        />
        <Search
          ariaLabel="search notes"
          placeholder="Search"
          onSearch={searchNotes}
        />
      </div>
      <div aria-label="note list" className={styles.list}>
        {notes && notes.length !== 0 ? (
          notes.map((note) => <Note key={note.id} note={note} />)
        ) : (
          <NoData ariaLabel="no notes" label="No notes available" />
        )}
      </div>
    </div>
  );
};
