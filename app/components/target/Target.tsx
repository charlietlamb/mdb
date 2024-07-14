import {target} from '~/copy/target/target';
import TargetVideo from './TargetVideo';
import {useAppSelector} from '~/lib/hooks';

export default function Target() {
  const who = useAppSelector((state) => state.product.who);
  return (
    <div className="padding-main bg-accent-500 bg-dot-white/50 flex flex-col items-center gap-8 py-16">
      <h3 className="h2-size font-bold text-center text-white">
        {target[who].heading}
      </h3>
      <div className="md:grid-cols-2 grid w-full grid-cols-1">
        <TargetVideo />
        <div className="flex flex-col gap-2 p-4 text-center">
          <h4 className="text-lg font-medium text-white">
            {target[who].subHeading}
          </h4>
          <p className="text-primary-100">{target[who].text}</p>
        </div>
      </div>
    </div>
  );
}
