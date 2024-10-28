import { Button, NoData } from "@/components";
import { useNotes } from "@/context";
import styles from "./categories.module.css";
import { Category } from "./Category";
import { CategoryInput } from "./CategoryInput";

export const Categories = () => {
  const { categories, isCreatingCategory, startCategoryCreation } = useNotes();
  return (
    <div className={styles.categories}>
      {isCreatingCategory ? (
        <CategoryInput />
      ) : (
        <Button
          label="Create Category"
          icon="plus"
          onClick={startCategoryCreation}
        />
      )}
      <div className={styles.list}>
        {categories.length ? (
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        ) : (
          <NoData label="Create a category" />
        )}
      </div>
    </div>
  );
};
