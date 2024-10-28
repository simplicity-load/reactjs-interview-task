import { Categories, Form, Notes } from "@/components";
import { useNotes } from "@/context";
import { Drawers, NoData } from "@/ui";
import { Close } from "@mui/icons-material";
import { useMemo } from "react";
import styles from "./app.module.css";

export const App = () => {
  const { isCreatingNote, isAnyCategorySelected, isAnyNoteSelected } =
    useNotes();
  const content: JSX.Element[] = useMemo(() => {
    if (!isAnyCategorySelected)
      return [
        <Categories key="c" />,
        <NoData key="nd" label="No Category selected" />,
      ];
    if (!isCreatingNote && !isAnyNoteSelected)
      return [<Categories key="c" />, <Notes key="n" />];
    if (!isCreatingNote)
      return [<Categories key="c" />, <Notes key="n" />, <Form key="f" />];
    return [<Categories key="c" />, <Form key="f" />];
  }, [isAnyCategorySelected, isCreatingNote, isAnyNoteSelected]);
  return (
    <div aria-label="app" className={styles.content}>
      <header className={styles.header}>
        <span>Your notes</span> <Close />
      </header>
      <Drawers children={content} />
    </div>
  );
};
