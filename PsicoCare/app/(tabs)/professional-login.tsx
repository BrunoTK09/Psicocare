// app/(tabs)/professional-login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfessionalLoginScreen() {
  const router = useRouter();
  const [crp, setCrp] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!crp || !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    console.log('Login profissional:', { crp, email, senha });
    router.push('/(tabs)/agendamento');
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 justify-center items-center">
      <Text className="text-blue-600 text-3xl font-bold mb-2">PsicoCare</Text>
      <Text className="text-gray-700 text-lg mb-6">Área do Profissional</Text>

      <View className="bg-white w-full p-5 rounded-2xl shadow-md">
        <Text className="text-xl font-semibold text-gray-800 mb-4">Login</Text>

        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3 text-base" placeholder="Número do CRP" keyboardType="numeric" value={crp} onChangeText={setCrp} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3 text-base" placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3 text-base" placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />

        <TouchableOpacity className="bg-blue-600 py-3 rounded-lg items-center mb-3" onPress={handleLogin}>
          <Text className="text-white font-semibold text-base">Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('Função', 'Recuperação de senha em breve')}>
          <Text className="text-blue-600 text-sm text-center">Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="mt-4" onPress={() => router.push('/')}>
        <Text className="text-sm text-blue-700 underline">Voltar para Início</Text>
      </TouchableOpacity>
    </View>
  );
}
