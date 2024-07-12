import TrustPilotSvg from './TrustPilotSvg';

export default function Banner({text}: {text: string | null}) {
  return (
    <div className="bg-accent-500 text-primary-50 relative z-50 flex items-center justify-center w-full gap-2 p-2 font-bold uppercase">
      <p className="md:flex hidden">
        Trusted by over 100,000 customers worldwide
      </p>
      <TrustPilotSvg className="h-[20px] xl:h-[25px] 2xl:h-[30px]" />
    </div>
  );
}
