import { Category } from "@/hooks";
import styles from "./category.module.css";
import { ArrowDropDown, ArrowRight, Folder } from "@mui/icons-material";
import { classNames } from "@/utils";

interface P {
  category: Category;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export const CategoryItem = ({
  category: {
    name,
    noteList: { length },
  },
  isSelected = false,
  isDisabled = false,
}: P) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.selected]: isSelected,
        [styles.disabled]: isDisabled,
      })}
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
