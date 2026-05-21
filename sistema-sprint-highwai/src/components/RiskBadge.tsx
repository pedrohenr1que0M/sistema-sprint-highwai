import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RiskLevel } from '../types';

const COLORS: Record<RiskLevel, string> = {
  baixo: '#22c55e',
  medio: '#f59e0b',
  alto:  '#ef4444',
};

const LABELS: Record<RiskLevel, string> = {
  baixo: 'Baixo',
  medio: 'Médio',
  alto:  'Alto',
};

export const RiskBadge = ({ risk }: { risk: RiskLevel }) => (
  <View style={[styles.badge, { backgroundColor: COLORS[risk] }]}>
    <Text style={styles.text}>{LABELS[risk]}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: { color: '#fff', fontSize: 12, fontWeight: '700' },
});