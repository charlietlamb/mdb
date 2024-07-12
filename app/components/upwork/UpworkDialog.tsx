import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {motion} from 'framer-motion';
import {UpworkDataType} from './data/UpworkDataType';
import {cn} from '~/lib/utils';
import {Button} from '../ui/button';
import {Image} from '@shopify/hydrogen';

export default function UpworkDialog({data}: {data: UpworkDataType}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className="justify-left group aspect-square border-slate-200 hover:border-slate-100 relative flex flex-col items-center w-full gap-2 overflow-hidden transition border-2 rounded-md cursor-pointer"
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1}}
        >
          <Image
            //src={data.images[0].url}
            src="https://images.unsplash.com/photo-1528256507509-cc4facea43f6"
            alt={data.title + ' image'}
            width={1024}
            height={1024}
          />
          <div className="bg-black/50 group-hover:flex absolute inset-0 hidden transition" />
          <div className="left-1/2 top-1/2 group-hover:flex absolute z-10 flex-col items-center justify-center hidden gap-2 text-xl font-medium text-center text-white transition -translate-x-1/2 -translate-y-1/2">
            <h4 className="">{data.title}</h4>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="flex flex-col overflow-hidden overflow-y-auto">
        <div className="flex flex-col gap-4 p-4 overflow-y-auto rounded-lg">
          <DialogTitle className="h2-size text-accent-500">
            {data.title}
          </DialogTitle>
          <div className="min-h-px bg-accent-500 w-full h-px rounded-full" />
          <div
            className={cn(
              'grid grid-cols-1 gap-2 md:grid-cols-2',
              data.col && 'md:grid-cols-1',
            )}
          >
            {data.images.map((image, index) => (
              <div
                className={cn(
                  'flex h-auto flex-col justify-between gap-2',
                  data.col && 'mx-auto w-full md:w-[50%]',
                )}
                key={index}
              >
                <Image
                  src="https://images.unsplash.com/photo-1528256507509-cc4facea43f6"
                  alt={data.title + ' image'}
                  width={1024}
                  height={1024}
                  className="border-slate-200 border-2 rounded-md"
                />
                <h4 className="text-primary-900 text-xl font-medium">
                  {image.title}
                </h4>
              </div>
            ))}
          </div>
          <div className="min-h-px bg-accent-500 w-full h-px rounded-full" />
          {data.content.map((content, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h4 className="h2-size text-accent-500 font-medium">
                {content.subheading}
              </h4>
              <p className="text-primary-900">{content.desc}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
