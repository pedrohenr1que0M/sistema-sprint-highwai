import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Alert, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../store';
import { NivelRisco } from '../types';

const RISCOS: { valor: NivelRisco; label: string; cor: string }[] = [
  { valor: 'baixo', label: 'Baixo', cor: '#22c55e' },
  { valor: 'medio', label: 'Médio', cor: '#f59e0b' },
  { valor: 'alto',  label: 'Alto',  cor: '#ef4444' },
];

export const NovaOcorrenciaScreen = () => {
  const { addOcorrencia } = useStore();
  const navigation = useNavigation<any>();

  const [descricao, setDescricao] = useState('');
  const [local, setLocal]         = useState('');
  const [risco, setRisco]         = useState<NivelRisco>('baixo');

  const handleSalvar = () => {
    if (!descricao.trim() || !local.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    addOcorrencia({ descricao, local, risco });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo}>

        <Text style={styles.label}>Descrição *</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descreva o que aconteceu..."
          placeholderTextColor="#94a3b8"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <Text style={styles.label}>Local *</Text>
        <TextInput
          style={styles.input}
          value={local}
          onChangeText={setLocal}
          placeholder="Ex: Galpão A — Setor de Manutenção"
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.label}>Nível de Risco</Text>
        <View style={styles.riscoRow}>
          {RISCOS.map((r) => (
            <TouchableOpacity
              key={r.valor}
              style={[
                styles.riscoBtn,
                { borderColor: r.cor },
                risco === r.valor && { backgroundColor: r.cor },
              ]}
              onPress={() => setRisco(r.valor)}
            >
              <Text style={[
                styles.riscoBtnTexto,
                { color: risco === r.valor ? '#fff' : r.cor },
              ]}>
                {r.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
          <Text style={styles.botaoTexto}>Salvar Ocorrência</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: '#f1f5f9' },
  conteudo:     { padding: 20 },
  label:        { fontSize: 14, fontWeight: '600', color: '#334155', marginBottom: 6, marginTop: 16 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: '#0f172a',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  textarea:     { minHeight: 100 },
  riscoRow:     { flexDirection: 'row', gap: 10, marginTop: 4 },
  riscoBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
  },
  riscoBtnTexto:  { fontWeight: '700', fontSize: 14 },
  botaoSalvar: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
  },
  botaoTexto: { color: '#fff', fontWeight: '700', fontSize: 16 },
});