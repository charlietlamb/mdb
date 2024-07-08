import {whoData} from '~/data/who/whoData';
import {Button} from '../ui/button';
import {cn} from '~/lib/utils';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {setOccasion} from '~/store/create/createSlice';

export default function CreateSong2() {
  const {occasion} = useAppSelector((state) => state.create);
  const dispatch = useAppDispatch();
  return (
    <div className="relative z-10 flex flex-col items-center justify-center flex-grow h-full gap-4 text-center">
      <div className="flex flex-col items-center gap-1">
        <h4 className="text-3xl font-bold leading-none">
          What's the occasion?
        </h4>
        <p className="text-primary-700">
          Is this song being created for a particular reason?
        </p>
      </div>
      <div className="md:flex-row md:flex md:w-auto grid w-full grid-cols-2 gap-2">
        {whoData.map((who) => (
          <Button
            className={cn(
              'border-accent-500 hover:bg-accent-500 text-accent-500 hover:text-white bg-transparent border',
              occasion === who.title && 'bg-accent-500 text-white',
            )}
            key={who.title}
            onClick={() => dispatch(setOccasion(who.title))}
          >
            {who.title}
          </Button>
        ))}
        <Button
          className={cn(
            'border-accent-500 hover:bg-accent-500 text-accent-500 hover:text-white bg-transparent border',
            occasion === null && 'bg-accent-500 text-white',
          )}
          onClick={() => dispatch(setOccasion(null))}
        >
          Other
        </Button>
      </div>
    </div>
  );
}
