export default function BaResults() {
  return (
    <div className="md:flex-row flex flex-col items-center gap-8 px-8">
      <div className="basis-1/3 aspect-square flex items-center justify-center overflow-hidden">
        <img src="/images/ba/ba1.webp" alt="BA1" className="w-full" />
      </div>
      <div className="basis-1/3 aspect-square flex items-center justify-center overflow-hidden">
        <img
          src="/images/mdb-full.webp"
          alt="BA1"
          className="h-full border-4 border-white"
        />
      </div>
      <div className="basis-1/3 aspect-square flex items-center justify-center overflow-hidden">
        <img src="/images/ba/ba2.webp" alt="BA1" className="w-full" />
      </div>
    </div>
  );
}
