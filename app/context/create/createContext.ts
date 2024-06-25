import {Dispatch, SetStateAction, createContext, useContext} from 'react';

interface CreateSongContext {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  next: boolean;
  setNext: Dispatch<SetStateAction<boolean>>;
}

export const CreateSongContext = createContext<CreateSongContext | undefined>(
  undefined,
);

export function useCreateSongContext() {
  const context = useContext(CreateSongContext);
  if (!context)
    throw new Error(
      'useCreateSongContext must be used within a CreateSongProvider',
    );
  return context;
}
