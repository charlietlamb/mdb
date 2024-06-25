import {Dispatch, SetStateAction, createContext, useContext} from 'react';
import {WhoType} from '~/data/who/types/WhoType';

interface WhoContext {
  key: WhoType;
  setKey: Dispatch<SetStateAction<WhoType>>;
}

export const WhoContext = createContext<WhoContext | undefined>(undefined);

export function useWhoContext() {
  const context = useContext(WhoContext);
  if (!context)
    throw new Error('useWhoContext must be used within a WhoProvider');
  return context;
}
