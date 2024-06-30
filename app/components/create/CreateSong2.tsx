import {useCreateSongContext} from '~/context/create/createContext';
import {whoData} from '~/data/who/whoData';
import {Button} from '../ui/button';
import {cn} from '~/lib/utils';

export default function CreateSong2() {
  const {occasion, setOccasion, setNext} = useCreateSongContext();
  setNext(true);
  return (
    <div className="relative z-10 flex flex-col items-center justify-center flex-grow h-full gap-4 text-center">
      <div className="flex flex-col items-center">
        <h4 className="text-3xl font-bold">What's the occasion?</h4>
        <p>Is this song being created for a particular reason?</p>
      </div>
      <div className="flex gap-2">
        {whoData.map((who) => (
          <Button
            className={cn(
              'border-accent-500 hover:bg-accent-500 text-accent-500 hover:text-white bg-transparent border',
              occasion === who.title && 'bg-accent-500 text-white',
            )}
            key={who.title}
            onClick={() => setOccasion(who.title)}
          >
            {who.title}
          </Button>
        ))}
        <Button
          className={cn(
            'border-accent-500 hover:bg-accent-500 text-accent-500 hover:text-white bg-transparent border',
            occasion === null && 'bg-accent-500 text-white',
          )}
          onClick={() => setOccasion(null)}
        >
          Other
        </Button>
      </div>
    </div>
  );
}
