import React from 'react';
import {
  FlatList, Text, TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../store';
import { OccurrenceCard } from '../components/OccurrenceCard';
import { Occurrence } from '../types';

export const ListScreen = () => {
  const { occurrences } = useStore();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={occurrences}
        keyExtractor={(item: Occurrence) => item.id}
        renderItem={({ item }) => (
          <OccurrenceCard
            occurrence={item}
            onPress={() => navigation.navigate('Detail', { occurrence: item })}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma ocorrência registrada.</Text>
        }
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('NewOccurrence')}
      >
        <Text style={styles.fabText}>+ Nova</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  list:      { padding: 16, paddingBottom: 90 },
  empty:     { textAlign: 'center', color: '#94a3b8', marginTop: 40 },
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
  fabText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});