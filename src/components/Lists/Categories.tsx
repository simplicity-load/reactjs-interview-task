import { useNotes } from "@/context";
import { Button, NoData } from "@/ui";
import styles from "./categories.module.css";
import { Category } from "./Category";
import { CategoryInput } from "./CategoryInput";

export const Categories = () => {
  const { categories, isCreatingCategory, startCategoryCreation } = useNotes();
  return (
    <div aria-label="categories" className={styles.categories}>
      {isCreatingCategory ? (
        <CategoryInput />
      ) : (
        <Button
          ariaLabel="create category"
          label="Create Category"
          icon="plus"
          onClick={startCategoryCreation}
        />
      )}
      <div aria-label="category list" className={styles.list}>
        {categories.length ? (
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        ) : (
          <NoData ariaLabel="no categories" label="Create a category" />
        )}
      </div>
    </div>
  );
};
