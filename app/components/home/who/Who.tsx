import WhoTabs from './WhoTabs';

export default function Who() {
  return (
    <div className="padding-main bg-accent-500 bg-dot-white/50 flex flex-col w-full gap-4 py-8">
      <h3 className="text-primary-100 h2-size font-bold">
        Over 350,000 original songs created for people just like you
      </h3>
      <p className="text-primary-200 h3-size">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, maxime
        consequatur. Tempore quisquam veritatis incidunt quaerat, nesciunt
        excepturi tempora quam, ea quia ad aspernatur eum dolore aliquam
        provident asperiores repellendus.
      </p>
      <WhoTabs />
    </div>
  );
}
