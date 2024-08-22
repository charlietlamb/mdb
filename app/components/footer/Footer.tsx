import {footerData} from '~/data/footer/footerData';
import FooterColumn from './FooterColumn';
import FooterBottom from './FooterBottom';

export function Footer() {
  return (
    <footer className="font-main text-accent-700 2xl:px-60 xl:px-40 lg:px-20 border-primary p-8 bg-white border-t">
      <div className=" lg:grid-cols-3 lg:col-span-2 gap-y-4 grid grid-cols-1">
        {footerData.map((data) => (
          <FooterColumn key={data.title} {...data} />
        ))}
      </div>
      <FooterBottom />
    </footer>
  );
}
