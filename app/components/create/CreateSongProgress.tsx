import {Progress} from '~/components/ui/progress';
import {useCreateSongContext} from '~/context/create/createContext';
import {Button} from '../ui/button';

export default function CreateSongProgress() {
  const {page, setPage, next, setNext} = useCreateSongContext();
  return (
    <div className="flex flex-col items-center gap-4 mt-auto">
      <div className="flex gap-2">
        <Button
          disabled={page === 0}
          onClick={() => {
            page === 1 && setNext(true);
            setPage(page - 1);
          }}
        >
          Prev
        </Button>
        <Button
          disabled={!next}
          onClick={() => {
            setPage(page + 1);
            setNext(false);
          }}
        >
          Next
        </Button>
      </div>
      <Progress
        value={(page / 8) * 100}
        className="transition-all duration-1000"
      />
    </div>
  );
}
