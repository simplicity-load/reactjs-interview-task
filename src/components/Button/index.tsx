import { classNames } from "@/utils";
import { Add, Close, Delete, Done } from "@mui/icons-material";
import styles from "./button.module.css";

type Icon = "plus" | "save" | "close" | "delete";

interface P {
  label?: string;
  icon: Icon;
  isRed?: boolean;
}

const iconMap: Record<Icon, JSX.Element> = {
  plus: <Add />,
  save: <Done />,
  close: <Close />,
  delete: <Delete />,
};

export const Button = ({ label, icon, isRed = false }: P) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.red]: isRed,
      })}
    >
      {label && <span className={styles.label}>{label}</span>}
      <div
        className={classNames(styles.icon, {
          [styles.redIcon]: isRed,
          [styles.rightIcon]: Boolean(label),
        })}
      >
        {iconMap[icon]}
      </div>
    </button>
  );
};
