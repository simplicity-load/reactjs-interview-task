import { useNotes } from "@/context";
import { Button } from "@/ui";
import styles from "./categoryInput.module.css";

export const CategoryInput = () => {
  const {
    changeCategoryCreation,
    submitCategoryCreation,
    cancelCategoryCreation,
  } = useNotes();
  return (
    <div aria-label="input category name" className={styles.wrapper}>
      <input
      aria-label="change category"
        className={styles.input}
        placeholder="Add a title..."
        onChange={({ target: { value } }) => changeCategoryCreation(value)}
        onKeyUp={(e) => {
          if (e.key !== "Enter") return;
          submitCategoryCreation();
        }}
        autoFocus
      />
      <Button
        ariaLabel="save category"
        icon="save"
        onClick={submitCategoryCreation}
      />
      <Button
        ariaLabel="cancel category"
        icon="close"
        isRed
        onClick={cancelCategoryCreation}
      />
    </div>
  );
};
