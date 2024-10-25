import { Categories, Drawers, Form, Notes } from "@/components";
import { Close } from "@mui/icons-material";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <span>Your notes</span> <Close />
      </header>
      <Drawers children={[<Categories />, <Notes />, <Form />]} />
    </div>
  );
};
