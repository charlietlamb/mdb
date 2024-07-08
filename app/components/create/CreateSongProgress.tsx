import {Progress} from '~/components/ui/progress';
import {Button} from '../ui/button';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {setNext, setPage} from '~/store/create/createSlice';

export default function CreateSongProgress() {
  const {page, next, completed} = useAppSelector((state) => state.create);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center gap-4 mt-auto">
      <div className="flex gap-2">
        <Button
          disabled={page === 0}
          onClick={() => {
            if (completed[page - 1]) dispatch(setNext(true));
            dispatch(setPage(page - 1));
          }}
        >
          Prev
        </Button>
        <Button
          disabled={!next}
          onClick={() => {
            if (completed[page + 1]) dispatch(setNext(true));
            dispatch(setPage(page + 1));
          }}
        >
          Next
        </Button>
      </div>
      <Progress
        value={(page / 4) * 100}
        className="transition-all duration-1000"
      />
    </div>
  );
}
