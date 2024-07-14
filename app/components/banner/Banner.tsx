import {Music} from 'lucide-react';
import TrustPilotSvg from './TrustPilotSvg';

export default function Banner() {
  return (
    <div className="bg-accent-500 text-primary-50 relative z-50 flex items-center justify-center w-full gap-1 p-2 font-bold uppercase">
      <Music />
      <p className="">Over 100,000 custom songs created</p>
      <Music />
      {/* <TrustPilotSvg className="h-[20px] xl:h-[25px] 2xl:h-[30px] md:flex hidden" /> */}
    </div>
  );
}
