import { Button } from "@/components";
import { categories } from "@/hooks";
import styles from "./categories.module.css";
import { CategoryItem } from "./Category";
import { CategoryInput } from "./CategoryInput";

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <Button label="Create Category" icon="plus" />
      {/* <CategoryInput /> */}
      <div className={styles.list}>
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>
    </div>
  );
};
