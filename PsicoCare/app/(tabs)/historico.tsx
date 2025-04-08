// app/(tabs)/historico.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HistoricoScreen() {
  const router = useRouter();
  const consultas = [
    { id: 1, profissional: 'Dra. Ana Lima', data: '10/04/2025', status: 'Concluída' },
    { id: 2, profissional: 'Dr. João Silva', data: '12/04/2025', status: 'Agendada' },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 px-6 pt-10">
      <Text className="text-blue-600 text-2xl font-bold mb-6 text-center">Histórico de Consultas</Text>

      {consultas.map((c) => (
        <View key={c.id} className="bg-white p-4 mb-4 rounded-xl shadow-sm">
          <Text className="text-gray-800 text-lg font-semibold">{c.profissional}</Text>
          <Text className="text-gray-600">Data: {c.data}</Text>
          <Text className="text-gray-500">Status: {c.status}</Text>
        </View>
      ))}

      <TouchableOpacity className="bg-blue-600 py-3 rounded-lg items-center mb-10" onPress={() => router.push('/(tabs)/avaliacao')}>
        <Text className="text-white font-semibold text-base">Avaliar Atendimento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
