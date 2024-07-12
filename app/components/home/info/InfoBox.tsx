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
  text: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-primary-100 ring-4 ring-offset-4 ring-offset-primary-200 ring-primary-100 relative py-8 rounded-lg',
        className,
      )}
      initial={{opacity: 0, x: index % 2 === 0 ? -100 : 100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      viewport={{once: true}}
    >
      <GradientBackground />
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center gap-2">
          {icon}
          <h2 className="h2-size font-bold">{title}</h2>
          <p className="max-w-[70%] h4-size text-center text-accent-500 font-medium">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
