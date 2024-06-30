import {useCreateSongContext} from '~/context/create/createContext';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export default function CreateSongSelect() {
  const {page, setPage} = useCreateSongContext();
  return (
    <Select
      defaultValue=""
      onValueChange={(e) => {
        setPage(parseInt(e));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder={`Item ${1}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({length: 7}, (_, index) => (
            <SelectItem key={index} value={index.toString()}>
              Item {index + 1}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
