import { createContext, useContext } from 'react';
import { Ocorrencia } from './types';

export interface StoreData {
  ocorrencias: Ocorrencia[];
  addOcorrencia: (data: Omit<Ocorrencia, 'id' | 'data'>) => void;
}

export const StoreContext = createContext<StoreData>({} as StoreData);

export const useStore = () => useContext(StoreContext);