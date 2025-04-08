// app/(tabs)/avaliacao.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function AvaliacaoScreen() {
  const router = useRouter();
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');

  const handleEnviar = () => {
    if (!nota || !comentario) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    console.log('Avaliação enviada:', { nota, comentario });
    router.push('/(tabs)/acompanhamento');
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 pt-10">
      <Text className="text-blue-600 text-2xl font-bold mb-6 text-center">Avaliar Atendimento</Text>

      <View className="bg-white p-5 rounded-2xl shadow-md">
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
          placeholder="Nota (1 a 5)"
          keyboardType="numeric"
          value={nota}
          onChangeText={setNota}
        />
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
          placeholder="Comentário"
          multiline
          numberOfLines={4}
          value={comentario}
          onChangeText={setComentario}
        />
        <TouchableOpacity className="bg-blue-600 py-3 rounded-lg items-center" onPress={handleEnviar}>
          <Text className="text-white font-semibold text-base">Enviar Avaliação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
