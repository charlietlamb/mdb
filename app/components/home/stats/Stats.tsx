import StatsNums from './StatsNums';

export default function Stats() {
  return (
    <div className="padding-main flex flex-col items-center gap-8 py-16">
      <div className="flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-2">
          <h3 className="h2-size font-bold text-center">
            Only .002% of musicians currently make a full-time living in music
          </h3>
          <p className="text-primary-700 h3-size leading-none text-center">
            Together, we're changing that. When you request an original song,
            you're giving a musician the chance to turn their passion into a
            living.
          </p>
        </div>
        <StatsNums />
      </div>
    </div>
  );
}
