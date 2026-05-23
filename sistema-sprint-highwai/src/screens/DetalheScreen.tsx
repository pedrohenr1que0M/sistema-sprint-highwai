import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { RiskBadge } from '../components/RiskBadge';

export const DetalheScreen = ({ route }: any) => {
  const { ocorrencia } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo}>

        <View style={styles.header}>
          <RiskBadge risco={ocorrencia.risco} />
        </View>

        <View style={styles.bloco}>
          <Linha label="Data"  valor={ocorrencia.data} />
          <Linha label="Local" valor={ocorrencia.local} />
        </View>

        <Text style={styles.secao}>Descrição</Text>
        <View style={styles.bloco}>
          <Text style={styles.descricao}>{ocorrencia.descricao}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const Linha = ({ label, valor }: { label: string; valor: string }) => (
  <View style={styles.linha}>
    <Text style={styles.linhaLabel}>{label}</Text>
    <Text style={styles.linhaValor}>{valor}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  conteudo:  { padding: 20 },
  header:    { marginBottom: 20 },
  bloco: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  linha:      { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  linhaLabel: { fontSize: 14, color: '#64748b', fontWeight: '500' },
  linhaValor: { fontSize: 14, color: '#0f172a', fontWeight: '600' },
  secao:      { fontSize: 14, fontWeight: '600', color: '#334155', marginBottom: 8 },
  descricao:  { fontSize: 15, color: '#334155', lineHeight: 22 },
});