import styles from "./nodata.module.css";

interface P {
  label: string;
  ariaLabel?: string;
}

export const NoData = ({ label, ariaLabel }: P) => (
  <div aria-label={ariaLabel} className={styles.nodata}>
    {label}
  </div>
);
