import {Button} from '~/components/ui/button';
import {setPage} from '~/store/create/createSlice';
import {useAppDispatch} from '~/lib/hooks';

export default function CreateSongInit() {
  const dispatch = useAppDispatch();
  return (
    <div className="relative h-full">
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow h-full gap-4">
        <div className="flex flex-col items-center gap-1">
          <h4 className="text-3xl font-bold text-center">
            Create Your Own Melody
          </h4>
          <p className="md:max-w-[50%] max-w-[75%] text-center text-lg text-primary-700">
            Get your own custom-made soundtrack crafted by our highly skilled
            musicians. Whether it’s a birthday song, an anniversary serenade, or
            a tune that brings encouragement, we will convert your feelings
            through music.
          </p>
        </div>
        <Button onClick={() => dispatch(setPage(1))}>Get Started</Button>
      </div>
    </div>
  );
}
