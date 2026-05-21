import { createContext, useContext } from 'react';
import { Occurrence } from './types';

export interface StoreData {
  occurrences: Occurrence[];
  addOccurrence: (data: Omit<Occurrence, 'id' | 'date'>) => void;
}

export const StoreContext = createContext<StoreData>({} as StoreData);

export const useStore = () => useContext(StoreContext);