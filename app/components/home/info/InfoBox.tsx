import GradientBackground from '~/components/general/GradientBackground';
import {cn} from '~/lib/utils';
import {motion} from 'framer-motion';
export default function InfoBox({
  ref,
  className,
  title,
  text,
  icon,
  index,
}: {
  ref: React.RefObject<HTMLDivElement>;
  className: string;
  title: string;
  text: React.ReactNode;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-primary-100 ring-4 ring-offset-4 ring-offset-primary-200 ring-primary-100 py-8 rounded-lg relative',
        className,
      )}
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      viewport={{once: true}}
    >
      {!!index && (
        <div className="left-4 top-4 text-primary-300 absolute text-4xl font-bold rounded-full">
          {index}
        </div>
      )}
      <GradientBackground />
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center gap-2">
          {icon}
          <h2 className="h2-size font-bold">{title}</h2>

          {text}
        </div>
      </div>
    </motion.div>
  );
}
