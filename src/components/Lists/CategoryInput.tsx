import { useNotes } from "@/context";
import { Button } from "../Button";
import styles from "./categoryInput.module.css";

export const CategoryInput = () => {
  const {
    changeCategoryCreation,
    submitCategoryCreation,
    cancelCategoryCreation,
  } = useNotes();
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Add a title..."
        onChange={({ target: { value } }) => changeCategoryCreation(value)}
        onKeyUp={(e) => {
          if (e.key !== "Enter") return;
          submitCategoryCreation();
        }}
        autoFocus
      />
      <Button icon="save" onClick={submitCategoryCreation} />
      <Button icon="close" isRed onClick={cancelCategoryCreation} />
    </div>
  );
};
