import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StoreContext } from './src/store';
import { ListScreen } from './src/screens/ListScreen';
import { NewOccurrenceScreen } from './src/screens/NewOccurrenceScreen';
import { DetailScreen } from './src/screens/DetailScreen';
import { RootStackParamList } from './src/types/navigation';
import { Occurrence } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const INITIAL: Occurrence[] = [
  {
    id: '1',
    title: 'Vazamento na tubulação',
    description: 'Vazamento identificado no setor B, área de produção.',
    risk: 'alto',
    date: '21/05/2025',
    location: 'Setor B',
  },
  {
    id: '2',
    title: 'Iluminação defeituosa',
    description: 'Lâmpadas queimadas no corredor principal.',
    risk: 'baixo',
    date: '20/05/2025',
    location: 'Corredor Principal',
  },
];

export default function App() {
  const [occurrences, setOccurrences] = useState<Occurrence[]>(INITIAL);

  const addOccurrence = (data: Omit<Occurrence, 'id' | 'date'>) => {
    const nova: Occurrence = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('pt-BR'),
    };
    setOccurrences((prev) => [nova, ...prev]);
  };

  return (
    <StoreContext.Provider value={{ occurrences, addOccurrence }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#3b82f6' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: '700' },
          }}
        >
          <Stack.Screen name="List"          component={ListScreen}          options={{ title: 'Ocorrências' }} />
          <Stack.Screen name="NewOccurrence" component={NewOccurrenceScreen} options={{ title: 'Nova Ocorrência' }} />
          <Stack.Screen name="Detail"        component={DetailScreen}        options={{ title: 'Detalhe' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
}