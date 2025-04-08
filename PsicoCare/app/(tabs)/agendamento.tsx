// app/(tabs)/agendamento.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function AgendamentoScreen() {
  const router = useRouter();
  const [profissional, setProfissional] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const handleAgendar = () => {
    if (!profissional || !data || !horario) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    console.log('Agendamento:', { profissional, data, horario });
    router.push('/(tabs)/historico');
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 pt-10">
      <Text className="text-blue-600 text-2xl font-bold mb-6 text-center">Agendar Consulta</Text>

      <View className="bg-white p-5 rounded-2xl shadow-md">
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="Profissional" value={profissional} onChangeText={setProfissional} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="Data (DD/MM/AAAA)" value={data} onChangeText={setData} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-4" placeholder="Horário (HH:MM)" value={horario} onChangeText={setHorario} />

        <TouchableOpacity className="bg-blue-600 py-3 rounded-lg items-center" onPress={handleAgendar}>
          <Text className="text-white font-semibold text-base">Confirmar Agendamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
