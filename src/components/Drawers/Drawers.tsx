import { classNames } from "@/utils";
import styles from "./drawers.module.css";

interface P {
  children: JSX.Element[];
}

export const Drawers = ({ children }: P) => {
  const { length } = children;
  return (
    <main
      className={classNames(styles.drawers, {
        [styles.twoColumn]: length === 2,
        [styles.threeColumn]: length === 3,
      })}
    >
      {children.map((child) => (
        <div key={child.key} className={styles.drawer}>
          {child}
        </div>
      ))}
    </main>
  );
};
