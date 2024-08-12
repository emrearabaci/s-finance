/* Next API */
import Link from 'next/link';

/* Components */
import Icon from '@/app/_components/Icon/Icon';
import Button from '@/app/_components/Button/Button';
import Divider from '@/app/_components/Divider/Divider';
import ThemeSwitch from '@/app/_components/ThemeSwitch/ThemeSwitch';

/* Styles */
import styles from '@/app/_components/Navigation/Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.main}>
      <div className={styles.header}>
        <Link href="/">
          <Button content={<Icon iconName={'dot'} alt={'s-finance'} />} />
        </Link>
      </div>

      <Divider />

      <div className={styles.content}></div>

      <Divider />

      <div className={styles.footer}>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
