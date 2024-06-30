import {useEffect, useState} from 'react';
import {CreateSongContext} from '~/context/create/createContext';
import {createMap} from '~/data/create/createMap';
import CreateSongProgress from './CreateSongProgress';
import CreateSongSelect from './CreateSongSelect';

export default function CreateSong() {
  const [page, setPage] = useState(0);
  const [next, setNext] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState<string | null>(null);
  const [completed, setCompleted] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <CreateSongContext.Provider
      value={{
        page,
        setPage,
        next,
        setNext,
        name,
        setName,
        email,
        setEmail,
        occasion,
        setOccasion,
        completed,
        setCompleted,
      }}
    >
      <div className="flex flex-col px-8 py-16">
        <CreateSongSelect />
        {createMap.get(page)}
        <CreateSongProgress />
      </div>
    </CreateSongContext.Provider>
  );
}
