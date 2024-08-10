/* Types */
interface DividerProps {
  half?: boolean;
}

/* Styles */
import styles from '@/app/_components/Divider/Divider.module.scss';

export default function Divider({ half = false }: DividerProps) {
  return (
    <div className={`${styles.main} ${half ? styles.half : styles.full}`} />
  );
}
