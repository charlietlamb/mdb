import FooterLogo from './FooterLogo';

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="text-primary flex items-end justify-between w-full gap-4 py-8">
      <FooterLogo />
      <p>Copyright © {year} all rights reserved</p>
    </div>
  );
}
