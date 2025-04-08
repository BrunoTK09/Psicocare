// app/(tabs)/emergencia.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function EmergenciaScreen() {
  const router = useRouter();

  const handleAjuda = () => {
    Alert.alert('Ajuda Imediata', 'Um profissional será notificado.');
  };

  return (
    <View className="flex-1 bg-red-50 justify-center items-center px-6">
      <Text className="text-red-600 text-3xl font-bold mb-4">Emergência PsicoCare</Text>
      <Text className="text-gray-700 text-center mb-8">
        Se você está passando por um momento difícil, clique abaixo para receber ajuda.
      </Text>
      <TouchableOpacity className="bg-red-600 py-3 px-6 rounded-lg mb-4" onPress={handleAjuda}>
        <Text className="text-white font-semibold text-lg">Solicitar Ajuda</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text className="text-blue-700 underline">Voltar para Início</Text>
      </TouchableOpacity>
    </View>
  );
}
