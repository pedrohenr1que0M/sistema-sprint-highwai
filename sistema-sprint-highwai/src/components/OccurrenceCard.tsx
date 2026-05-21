import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Occurrence } from '../types';
import { RiskBadge } from './RiskBadge';

interface Props {
  occurrence: Occurrence;
  onPress: () => void;
}

export const OccurrenceCard = ({ occurrence, onPress }: Props) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.header}>
      <Text style={styles.title} numberOfLines={1}>
        {occurrence.title}
      </Text>
      <RiskBadge risk={occurrence.risk} />
    </View>
    <Text style={styles.location}>{occurrence.location}</Text>
    <Text style={styles.date}>{occurrence.date}</Text>
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
    alignItems: 'center',
    marginBottom: 6,
  },
  title:    { fontSize: 16, fontWeight: '600', flex: 1, marginRight: 8 },
  location: { fontSize: 13, color: '#64748b' },
  date:     { fontSize: 12, color: '#94a3b8', marginTop: 4 },
});