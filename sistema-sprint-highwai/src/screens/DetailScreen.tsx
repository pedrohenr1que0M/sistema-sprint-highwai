import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { RiskBadge } from '../components/RiskBadge';

export const DetailScreen = ({ route }: any) => {
  const { occurrence } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.header}>
          <Text style={styles.title}>{occurrence.title}</Text>
          <RiskBadge risk={occurrence.risk} />
        </View>

        <View style={styles.infoBox}>
          <Row label="Local" value={occurrence.location} />
          <Row label="Data"  value={occurrence.date} />
        </View>

        <Text style={styles.sectionLabel}>Descrição</Text>
        <View style={styles.descBox}>
          <Text style={styles.description}>{occurrence.description}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: '#f1f5f9' },
  content:      { padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title:        { fontSize: 22, fontWeight: '700', flex: 1, marginRight: 12, color: '#0f172a' },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  row:          { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  rowLabel:     { fontSize: 14, color: '#64748b', fontWeight: '500' },
  rowValue:     { fontSize: 14, color: '#0f172a', fontWeight: '600' },
  sectionLabel: { fontSize: 14, fontWeight: '600', color: '#334155', marginBottom: 8 },
  descBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  description:  { fontSize: 15, color: '#334155', lineHeight: 22 },
});