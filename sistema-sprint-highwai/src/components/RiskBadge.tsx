import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NivelRisco } from '../types';

const CORES: Record<NivelRisco, string> = {
  baixo: '#22c55e',
  medio: '#f59e0b',
  alto:  '#ef4444',
};

const LABELS: Record<NivelRisco, string> = {
  baixo: 'Baixo',
  medio: 'Médio',
  alto:  'Alto',
};

export const RiskBadge = ({ risco }: { risco: NivelRisco }) => (
  <View style={[styles.badge, { backgroundColor: CORES[risco] }]}>
    <Text style={styles.texto}>{LABELS[risco]}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  texto: { color: '#fff', fontSize: 12, fontWeight: '700' },
});