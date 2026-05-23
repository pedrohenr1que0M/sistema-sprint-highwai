import React from 'react';
import {
  FlatList, Text, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../store';
import { OcorrenciaCard } from '../components/OcorrenciaCard';
import { Ocorrencia } from '../types';

export const ListaScreen = () => {
  const { ocorrencias } = useStore();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ocorrencias}
        keyExtractor={(item: Ocorrencia) => String(item.id)}
        renderItem={({ item }) => (
          <OcorrenciaCard
            ocorrencia={item}
            onPress={() => navigation.navigate('Detalhe', { ocorrencia: item })}
          />
        )}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhuma ocorrência registrada.</Text>
        }
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('NovaOcorrencia')}
      >
        <Text style={styles.fabTexto}>+ Nova</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  lista:     { padding: 16, paddingBottom: 90 },
  vazio:     { textAlign: 'center', color: '#94a3b8', marginTop: 40 },
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 24,
    backgroundColor: '#3b82f6',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 14,
    elevation: 4,
  },
  fabTexto: { color: '#fff', fontWeight: '700', fontSize: 15 },
});