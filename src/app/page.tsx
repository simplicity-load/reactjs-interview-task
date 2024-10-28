"use client";
import { App } from "@/components";
import { NoteContextProvider } from "@/context";
import { store } from "@/store";
import { Provider } from "react-redux";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Provider store={store}>
        <NoteContextProvider>
          <App />
        </NoteContextProvider>
      </Provider>
    </div>
  );
}
