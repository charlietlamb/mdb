import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import {Footer} from '~/components/footer/Footer';
import {Header} from '~/components/header/Header';
import Banner from './banner/Banner';

export type LayoutProps = {
  cart: Promise<CartApiQueryFragment | null>;
  children?: React.ReactNode;
  footer: Promise<FooterQuery>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
};

export function Layout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
}: LayoutProps) {
  return (
    <>
      <Banner />
      {header && <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />}
      <main className="duration-600 flex-grow transition-all bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
