export default function StatsNums() {
  return (
    <div className="md:grid-cols-3 md:gap-0 grid w-full grid-cols-1 gap-4 my-8">
      <div className="flex flex-col items-center">
        <p className="text-5xl font-bold">
          350<span className="h3-size">k+</span>
        </p>
        <p className="text-primary-600 h5-size font-bold leading-none text-center uppercase">
          New opportunities <br className="md:flex hidden" />
          created for artists
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-5xl font-bold">
          <span className="text-4xl">$</span>30
          <span className="text-4xl">M+</span>
        </p>
        <p className="text-primary-600 h5-size font-bold leading-none text-center uppercase">
          PAID TO THE ARTIST
          <br className="md:flex hidden" /> COMMUNITY
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-5xl font-bold">
          1<span className="text-4xl">M+</span>
        </p>
        <p className="text-primary-600 h5-size font-bold leading-none text-center uppercase">
          NEW FANS <br className="md:flex hidden" />
          CREATED
        </p>
      </div>
    </div>
  );
}
