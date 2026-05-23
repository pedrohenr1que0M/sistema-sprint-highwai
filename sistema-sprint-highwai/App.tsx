import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StoreContext } from './src/store';
import { ocorrenciasMock } from './src/data/ocorrencias';
import { ListaScreen } from './src/screens/ListaScreen';
import { NovaOcorrenciaScreen } from './src/screens/NovaOcorrenciaScreen';
import { DetalheScreen } from './src/screens/DetalheScreen';
import { Ocorrencia } from './src/types';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>(ocorrenciasMock);

  const addOcorrencia = (data: Omit<Ocorrencia, 'id' | 'data'>) => {
    const nova: Ocorrencia = {
      ...data,
      id: Date.now(),
      data: new Date().toLocaleDateString('pt-BR'),
    };
    setOcorrencias((prev) => [nova, ...prev]);
  };

  return (
    <StoreContext.Provider value={{ ocorrencias, addOcorrencia }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#3b82f6' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: '700' },
          }}
        >
          <Stack.Screen name="Lista"          component={ListaScreen}          options={{ title: 'Ocorrências' }} />
          <Stack.Screen name="NovaOcorrencia" component={NovaOcorrenciaScreen} options={{ title: 'Nova Ocorrência' }} />
          <Stack.Screen name="Detalhe"        component={DetalheScreen}        options={{ title: 'Detalhe' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
}