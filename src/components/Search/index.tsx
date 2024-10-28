import { Search as SearchIcon } from "@mui/icons-material";
import styles from "./search.module.css";

interface P {
  placeholder?: string;
  onSearch: (search: string) => void
}

export const Search = ({ placeholder, onSearch }: P) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <input className={styles.input} placeholder={placeholder} onChange={({target: {value}}) => onSearch(value)}/>
    </div>
  );
};
