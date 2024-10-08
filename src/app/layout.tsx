/* Next API */
import type { Metadata } from 'next';

/* Context */
import { ThemeProvider } from '@/app/_context/ThemeContext';

/* Components */
import Navigation from '@/app/_components/Navigation/Navigation';

/* Fonts */
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

/* Styles */
import './globals.scss';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
