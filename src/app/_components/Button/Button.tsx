'use client';

/* Types */
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  content: React.ReactNode;
  fill?: boolean;
  radius?: boolean;
  outline?: boolean;
}

/* Styles */
import styles from '@/app/_components/Button/Button.module.scss';

export default function Button({
  type = 'button',
  onClick,
  content,
  fill = false,
  radius = true,
  outline = false
}: ButtonProps) {
  return (
    <button
      className={`${styles.main} ${fill ? styles.fill : ''} ${radius ? styles.radius : ''} ${outline ? styles.outline : ''}`.trim()}
      type={type}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
