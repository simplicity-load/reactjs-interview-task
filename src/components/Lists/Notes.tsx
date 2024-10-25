import { Button, Search } from "@/components";
import { categories } from "@/hooks";
import { Note } from "./Note";
import styles from "./notes.module.css";

export const Notes = () => {
  return (
    <div className={styles.notes}>
      <div className={styles.header}>
        <Button label="Create Note" icon="plus" />
        <Search placeholder="Search" />
      </div>
      <div className={styles.list}>
        {categories[0].noteList.map((note) => (
          <Note note={note} />
        ))}
      </div>
    </div>
  );
};
