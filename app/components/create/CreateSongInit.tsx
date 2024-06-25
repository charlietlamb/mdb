import {Button} from '~/components/ui/button';
import {useCreateSongContext} from '~/context/create/createContext';

export default function CreateSongInit() {
  const {setPage} = useCreateSongContext();
  return (
    <div className="flex flex-col items-center justify-center flex-grow gap-4">
      <h4 className="text-5xl font-bold">Create Your Own Melody</h4>
      <p className="max-w-[50%] text-center text-xl">
        Get your own custom-made soundtrack crafted by our highly skilled
        musicians. Whether it’s a birthday song, an anniversary serenade, or a
        tune that brings encouragement, we will convert your feelings through
        music.
      </p>
      <Button onClick={() => setPage(1)}>Get Started</Button>
    </div>
  );
}
