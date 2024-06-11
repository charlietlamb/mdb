import {Dispatch, SetStateAction, createContext, useContext} from 'react';

interface HeaderContext {
  headerKey: string | null;
  setHeaderKey: Dispatch<SetStateAction<string | null>>;
}

export const HeaderContext = createContext<HeaderContext | undefined>(
  undefined,
);

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeadersProvider');
  }
  return context;
}
