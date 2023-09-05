import { Nunito_Sans } from 'next/font/google';
import { ApolloWrapper } from '@lib/apollo/ApolloWrapper';
import MainHeader from '@components/MainHeader/MainHeader';

import './globals.css';

const nunito = Nunito_Sans({ weight: ['200'], subsets: ['latin'] });

export const metadata = {
  title: 'Brisa Cleaning - Home Page',
  description:
    'This is the site for Brisa Cleaning a home cleaning service for families',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <MainHeader />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
