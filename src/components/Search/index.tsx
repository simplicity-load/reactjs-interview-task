import { Search as SearchIcon } from "@mui/icons-material";
import styles from "./search.module.css";

interface P {
  placeholder?: string;
}

export const Search = ({ placeholder }: P) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
};
