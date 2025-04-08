// app/(tabs)/acompanhamento.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function AcompanhamentoScreen() {
  const router = useRouter();
  const [humor, setHumor] = useState('');
  const [sono, setSono] = useState('');
  const [sentimentos, setSentimentos] = useState('');

  const handleSalvar = () => {
    if (!humor || !sono || !sentimentos) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    console.log('Acompanhamento:', { humor, sono, sentimentos });
    router.push('/(tabs)/emergencia');
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 pt-10">
      <Text className="text-blue-600 text-2xl font-bold mb-6 text-center">Seu Bem-Estar</Text>

      <View className="bg-white p-5 rounded-2xl shadow-md">
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="Como está seu humor hoje?" value={humor} onChangeText={setHumor} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="Quantas horas dormiu?" value={sono} onChangeText={setSono} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-4" placeholder="Sentimentos predominantes?" value={sentimentos} onChangeText={setSentimentos} />

        <TouchableOpacity className="bg-blue-600 py-3 rounded-lg items-center" onPress={handleSalvar}>
          <Text className="text-white font-semibold text-base">Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
