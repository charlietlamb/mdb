import {useState} from 'react';
import {CreateSongContext} from '~/context/create/createContext';
import {createMap} from '~/data/create/createMap';
import CreateSongProgress from './CreateSongProgress';

export default function CreateSong() {
  const [page, setPage] = useState(0);
  const [next, setNext] = useState(true);
  return (
    <CreateSongContext.Provider value={{page, setPage, next, setNext}}>
      <div className="flex flex-col px-8 py-16">
        {createMap.get(page)}
        <CreateSongProgress />
      </div>
    </CreateSongContext.Provider>
  );
}
