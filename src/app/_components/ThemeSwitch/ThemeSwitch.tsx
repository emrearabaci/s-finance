'use client';

/* Hook */
import { useTheme } from '@/app/_context/ThemeContext';

/* Components */
import Icon from '@/app/_components/Icon/Icon';
import Button from '@/app/_components/Button/Button';

export default function ThemeSwitch() {
  const { switchTheme } = useTheme();

  return (
    <Button
      onClick={switchTheme}
      content={<Icon iconName={'circleHalf'} alt={'s-finance'} />}
    />
  );
}
