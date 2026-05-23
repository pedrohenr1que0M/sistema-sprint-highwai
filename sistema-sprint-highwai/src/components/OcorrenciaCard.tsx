import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ocorrencia } from '../types';
import { RiskBadge } from './RiskBadge';

interface Props {
  ocorrencia: Ocorrencia;
  onPress: () => void;
}

export const OcorrenciaCard = ({ ocorrencia, onPress }: Props) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.header}>
      <Text style={styles.descricao} numberOfLines={2}>
        {ocorrencia.descricao}
      </Text>
      <RiskBadge risco={ocorrencia.risco} />
    </View>
    <Text style={styles.local}>{ocorrencia.local}</Text>
    <Text style={styles.data}>{ocorrencia.data}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 8,
  },
  descricao: { fontSize: 15, fontWeight: '600', flex: 1, color: '#0f172a' },
  local:     { fontSize: 13, color: '#64748b' },
  data:      { fontSize: 12, color: '#94a3b8', marginTop: 4 },
});