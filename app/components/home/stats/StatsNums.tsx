export default function StatsNums() {
  return (
    <div className="grid w-full grid-cols-3 my-8">
      <div className="flex flex-col items-center">
        <p className="text-5xl font-bold">
          350<span className="text-3xl">k+</span>
        </p>
        <p className="text-primary-600 text-md font-bold leading-none text-center uppercase">
          New opportunities <br />
          created for artists
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-5xl font-bold">
          <span className="text-3xl">$</span>30
          <span className="text-3xl">M+</span>
        </p>
        <p className="text-primary-600 text-md font-bold leading-none text-center uppercase">
          PAID TO THE ARTIST
          <br />
          COMMUNITY
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-5xl font-bold">
          1<span className="text-3xl">M+</span>
        </p>
        <p className="text-primary-600 text-md font-bold leading-none text-center uppercase">
          NEW FANS <br />
          CREATED
        </p>
      </div>
    </div>
  );
}
