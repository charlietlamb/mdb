import {whoData} from '~/data/who/whoData';
import Who from './HeaderWho';
import {Button} from '~/components/ui/button';
import {useAppDispatch} from '~/lib/hooks';
import {setOpen} from '~/store/create/createSlice';
import {HandHeart} from 'lucide-react';

export default function Whos() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center w-full gap-2 py-4">
      <div className="md:grid-cols-5 grid w-full gap-4">
        {whoData.map((data) => (
          <Who data={data} key={data.title} />
        ))}
      </div>
      <Button
        onClick={() => dispatch(setOpen(true))}
        className="flex items-center gap-2"
      >
        Any Other Occasion! <HandHeart />
      </Button>
    </div>
  );
}
