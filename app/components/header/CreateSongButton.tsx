import {Dialog, DialogContent, DialogTrigger} from '~/components/ui/dialog';
import CreateSong from '../create/CreateSong';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {setOpen} from '~/store/create/createSlice';

export default function CreateSongButton({
  hidden = false,
  children,
}: {
  hidden: boolean;
  children: React.ReactNode;
}) {
  const {open} = useAppSelector((state) => state.create);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={open}
      onOpenChange={(e) => {
        dispatch(setOpen(e));
      }}
    >
      <DialogTrigger asChild>
        <div
          onClick={() => dispatch(setOpen(true))}
          className={hidden ? 'hidden' : ''}
        >
          {children}
        </div>
      </DialogTrigger>
      <DialogContent>
        <CreateSong />
      </DialogContent>
    </Dialog>
  );
}
