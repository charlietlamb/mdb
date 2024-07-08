import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {setPage} from '~/store/create/createSlice';

export default function CreateSongSelect() {
  const {page} = useAppSelector((state) => state.create);
  const dispatch = useAppDispatch();
  return (
    <Select
      value={page.toString()}
      onValueChange={(e) => {
        dispatch(setPage(parseInt(e)));
      }}
    >
      <SelectTrigger className="w-auto font-bold uppercase">
        <SelectValue
          placeholder={`Step ${page} of 5`}
          className="placeholder:font-bold uppercase"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({length: 5}, (_, index) => (
            <SelectItem
              key={index}
              value={index.toString()}
              className="font-bold uppercase"
            >
              Step {index + 1} of 5
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
