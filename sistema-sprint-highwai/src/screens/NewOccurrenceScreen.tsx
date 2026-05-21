import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Alert, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../store';
import { RiskLevel } from '../types';

const RISKS: { value: RiskLevel; label: string; color: string }[] = [
  { value: 'baixo', label: 'Baixo', color: '#22c55e' },
  { value: 'medio', label: 'Médio', color: '#f59e0b' },
  { value: 'alto',  label: 'Alto',  color: '#ef4444' },
];

export const NewOccurrenceScreen = () => {
  const { addOccurrence } = useStore();
  const navigation = useNavigation();

  const [title, setTitle]           = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation]     = useState('');
  const [risk, setRisk]             = useState<RiskLevel>('baixo');

  const handleSave = () => {
    if (!title.trim() || !description.trim() || !location.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    addOccurrence({ title, description, location, risk });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.label}>Título *</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Ex: Vazamento na tubulação"
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.label}>Local *</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Ex: Setor B"
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.label}>Descrição *</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Descreva a ocorrência..."
          placeholderTextColor="#94a3b8"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <Text style={styles.label}>Nível de Risco</Text>
        <View style={styles.riskRow}>
          {RISKS.map((r) => (
            <TouchableOpacity
              key={r.value}
              style={[
                styles.riskBtn,
                { borderColor: r.color },
                risk === r.value && { backgroundColor: r.color },
              ]}
              onPress={() => setRisk(r.value)}
            >
              <Text style={[
                styles.riskBtnText,
                { color: risk === r.value ? '#fff' : r.color },
              ]}>
                {r.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Salvar Ocorrência</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  content:   { padding: 20 },
  label:     { fontSize: 14, fontWeight: '600', color: '#334155', marginBottom: 6, marginTop: 16 },
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
  riskRow:      { flexDirection: 'row', gap: 10, marginTop: 4 },
  riskBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
  },
  riskBtnText:  { fontWeight: '700', fontSize: 14 },
  saveBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
  },
  saveBtnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});