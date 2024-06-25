import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import {FooterMenu} from './FooterMenu';
import {Link} from '@remix-run/react';
import {footerData} from '~/data/footer/footerData';
import FooterColumn from './FooterColumn';
import FooterSide from './FooterSide';
import FooterBottom from './FooterBottom';

export function Footer({
  menu,
  shop,
}: FooterQuery & {shop: HeaderQuery['shop']}) {
  return (
    <footer className="bg-primary-900 text-primary-200 2xl:px-60 xl:px-40 lg:px-20 p-8">
      <div className="lg:grid-cols-3 gap-y-4 grid grid-cols-1">
        <div className="md:grid-cols-2 lg:grid-cols-4 lg:col-span-2 gap-y-4 grid grid-cols-1">
          {footerData.map((data) => (
            <FooterColumn key={data.title} {...data} />
          ))}
        </div>
        <FooterSide />
      </div>
      <FooterBottom />
    </footer>
  );
}
