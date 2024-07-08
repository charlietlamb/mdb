import {createMap} from '~/data/create/createMap';
import CreateSongProgress from './CreateSongProgress';
import CreateSongSelect from './CreateSongSelect';
import GradientBackground from '../general/GradientBackground';
import {useAppDispatch, useAppSelector} from '~/lib/hooks';
import {useEffect} from 'react';
import {setNext} from '~/store/create/createSlice';

export default function CreateSong() {
  const {page, completed} = useAppSelector((state) => state.create);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (completed[page]) {
      dispatch(setNext(true));
    } else {
      dispatch(setNext(false));
    }
  }, [completed, page]);
  return (
    <div className="relative flex flex-col px-8 py-16">
      <div className="relative z-10 flex flex-col w-full h-full">
        <CreateSongSelect />
        {createMap.get(page)}
        <CreateSongProgress />
      </div>
      <GradientBackground />
    </div>
  );
}
