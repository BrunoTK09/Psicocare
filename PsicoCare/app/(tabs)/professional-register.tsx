// app/(tabs)/professional-register.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfessionalRegisterScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [crp, setCrp] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const handleRegister = () => {
    if (!nome || !email || !senha || !crp || !instituicao || !especialidade) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    console.log('Cadastro do profissional:', { nome, email, senha, crp, instituicao, especialidade });
    router.push('/(tabs)/agendamento');
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 px-6 pt-10">
      <Text className="text-blue-600 text-3xl font-bold text-center mb-2">PsicoCare</Text>
      <Text className="text-gray-700 text-lg text-center mb-6">Cadastro do Profissional</Text>

      <View className="bg-white w-full p-5 rounded-2xl shadow-md">
        <Text className="text-xl font-semibold text-gray-800 mb-4">Informações</Text>

        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="Nome" value={nome} onChangeText={setNome} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="CRP" keyboardType="numeric" value={crp} onChangeText={setCrp} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-3" placeholder="Instituição de Formação" value={instituicao} onChangeText={setInstituicao} />
        <TextInput className="border border-gray-300 rounded-lg px-4 py-3 mb-4" placeholder="Especialidade" value={especialidade} onChangeText={setEspecialidade} />

        <TouchableOpacity className="bg-blue-600 py-3 rounded-lg items-center mb-4" onPress={handleRegister}>
          <Text className="text-white font-semibold text-base">Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center" onPress={() => router.push('/')}>
          <Text className="text-blue-700 underline">Voltar para Início</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
