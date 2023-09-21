import { Nunito_Sans } from 'next/font/google';
import { ApolloWrapper } from '@lib/apollo/ApolloWrapper';
import MainHeader from '@components/MainHeader/MainHeader';
import MainFooter from '@components/MainFooter/MainFooter';

import './globals.css';

const nunito = Nunito_Sans({ weight: ['200'], subsets: ['latin'] });

export const metadata = {
  title: 'Brisa Cleaning - Home Page',
  description:
    'This is the site for Brisa Cleaning a home cleaning service for families',
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ApolloWrapper>
          <MainHeader />
          {children}
          <MainFooter />
        </ApolloWrapper>
      </body>
    </html>
  );
}
