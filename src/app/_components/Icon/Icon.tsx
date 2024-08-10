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
import { imageConfigs, icons } from '@/app/_configs/configs';

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
      width={imageConfigs.width}
      height={imageConfigs.height}
      quality={imageConfigs.quality}
      priority={imageConfigs.priority}
    />
  );
}
