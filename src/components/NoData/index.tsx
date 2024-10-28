import styles from "./nodata.module.css";

interface P {
  label: string;
}

export const NoData = ({ label }: P) => (
  <div className={styles.nodata}>{label}</div>
);
