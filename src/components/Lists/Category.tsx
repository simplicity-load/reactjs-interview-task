import { useNotes } from "@/context";
import { Category as TCategory } from "@/store";
import { classNames } from "@/utils";
import { ArrowDropDown, ArrowRight, Folder } from "@mui/icons-material";
import styles from "./category.module.css";

interface P {
  category: TCategory;
}

export const Category = ({
  category: {
    id,
    name,
    noteList: { length },
  },
}: P) => {
  const { selectCategory, isCategorySelected, isCreatingNote, isEditingNote } =
    useNotes();
  const isSelected = isCategorySelected(id);
  const isDisabled = (isCreatingNote || isEditingNote) && !isSelected;
  return (
    <div
      aria-label="category"
      className={classNames(styles.wrapper, {
        [styles.selected]: isSelected,
        [styles.disabled]: isDisabled,
      })}
      onClick={() => selectCategory(id)}
    >
      <div className={styles.folderIcon}>
        <Folder />
      </div>
      <div className={styles.label}>
        {name} ({length})
      </div>
      <div className={styles.openIcon}>
        {isSelected ? <ArrowRight /> : <ArrowDropDown />}
      </div>
    </div>
  );
};
