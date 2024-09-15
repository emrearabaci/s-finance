'use client';

/* Types */
interface IconProps {
  iconName: keyof typeof icons;
  alt: string;
}

/* Next API */
import Image from 'next/image';

/* Context */
import { useTheme } from '@/app/_context/ThemeContext';

/* Configs */
import { iconConfigs, icons } from '@/app/_configs/configs';

/* Styles */
import styles from '@/app/_components/Icon/Icon.module.scss';

export default function Icon({ iconName, alt }: IconProps) {
  const { theme } = useTheme();

  const src = icons[iconName][theme];

  return (
    <Image
      className={styles.main}
      src={src}
      alt={alt}
      width={iconConfigs.width}
      height={iconConfigs.height}
      quality={iconConfigs.quality}
      priority={iconConfigs.priority}
    />
  );
}
