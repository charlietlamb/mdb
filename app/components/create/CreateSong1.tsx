import {Input} from '~/components/ui/input';
import {Label} from '../ui/label';
import {useEffect} from 'react';
import {z} from 'zod';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {setCompleted, setEmail, setName} from '~/store/create/createSlice';

export default function CreateSong1() {
  const {email, name, completed} = useAppSelector((state) => state.create);
  const dispatch = useAppDispatch();
  const emailSchema = z.string().email();
  const nameSchema = z.string().min(1);

  useEffect(() => {
    const newCompleted = [...completed];
    newCompleted[1] =
      emailSchema.safeParse(email).success &&
      nameSchema.safeParse(name).success;
    dispatch(setCompleted(newCompleted));
  }, [name, email]);
  return (
    <div className="relative h-full">
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow h-full gap-4 text-center">
        <div className="flex flex-col items-center gap-1">
          <h4 className="text-4xl font-bold leading-none">Lets get started</h4>
          <p className="text-primary-700">Enter some details about yourself</p>
        </div>
        <div className="flex flex-col w-full gap-2 max-w-[400px] text-start">
          <Label className="text-xl">Name</Label>
          <Input
            placeholder="Name"
            type="email"
            className="border-primary-900 bg-transparent border"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          <Label className="mt-2 text-xl">Email</Label>
          <Input
            placeholder="example@mail.com"
            type="email"
            className="border-primary-900 bg-transparent border"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
