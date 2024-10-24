import styles from './styles.module.css'

interface P {
    label?: string;
    isGreen?: boolean;
}

export const Button = ({ label, isGreen }: P) => {
    return <button className={styles.button}>{label}</button>
}