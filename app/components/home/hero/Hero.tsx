import {useNavigate} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';
import {Separator} from '~/components/ui/separator';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="padding-main hero-height border-primary relative flex flex-col items-center w-full border-b"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 2}}
      viewport={{amount: 'some'}}
    >
      <img
        className="absolute top-0 left-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="/images/MBD-full.webp"
        alt="hero image"
        height={1024}
        width={1024}
      />
      <div className="md:w-[50%] w-[70%] relative z-10 flex flex-col items-center p-8 md:px-16 my-auto bg-white text-accent-900 text-center ring-2 ring-offset-2 ring-offset-accent-950 ring-white">
        <h1 className="font-larken text-4xl font-bold">
          Mum-Approved,
          <br /> Nature-Perfected.
        </h1>
        <Separator className="bg-accent-950 h-px my-4" />
        <div className="flex flex-col w-full gap-4">
          <h2>
            When Nothing Else Works, Trust MBD Organics.
            <br /> Skincare born from a mother’s love, designed to heal and
            nurture.
          </h2>
          <Button onClick={() => navigate('/collections/all')}>Shop Now</Button>
        </div>
      </div>
    </motion.div>
  );
}
