import {Textarea} from '../ui/textarea';
import {useEffect} from 'react';
import {z} from 'zod';
import {Label} from '../ui/label';
import {setCompleted, setDetails, setSong} from '~/store/create/createSlice';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';

export default function CreateSong3() {
  const detailsSchema = z.string().min(20);
  const {completed, details, song} = useAppSelector((state) => state.create);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const newCompleted = [...completed];
    newCompleted[3] =
      detailsSchema.safeParse(details).success &&
      detailsSchema.safeParse(song).success;
    dispatch(setCompleted(newCompleted));
  }, [details, song]);
  return (
    <div className="relative z-10 flex flex-col items-center justify-center flex-grow h-full gap-8 text-center">
      <div className="flex flex-col items-center gap-1">
        <h4 className="text-3xl font-bold leading-none">Provide Key Details</h4>
        <p className="max-w-[600px] leading-none text-primary-700 hidden md:flex">
          Now provide as much context, detail, and emotion as possible for your
          artist to work with. Make sure to include names and special memories.
        </p>
      </div>

      <div className="flex flex-col w-full max-w-[600px] items-start gap-1">
        <Label className="text-lg font-bold leading-none">
          Details about your person
        </Label>
        <p className="text-start text-primary-700 text-sm">
          Let us know about special events,family members or anything else that
          is special to you!
        </p>
        <Textarea
          placeholder="Details needed for the person..."
          className="border-primary-900 w-full bg-transparent border max-w-[600px]"
          value={details}
          onChange={(e) => dispatch(setDetails(e.target.value))}
        />
      </div>
      <div className="flex flex-col w-full max-w-[600px] items-start gap-1">
        <Label className="text-lg font-bold leading-none">
          Details about your song
        </Label>
        <p className="text-start text-primary-700 text-sm">
          Let us know about genre, style or anything else that is important to
          you!
        </p>
        <Textarea
          placeholder="Details needed for the song..."
          className="border-primary-900 w-full bg-transparent border max-w-[600px]"
          value={song}
          onChange={(e) => dispatch(setSong(e.target.value))}
        />
      </div>
    </div>
  );
}
