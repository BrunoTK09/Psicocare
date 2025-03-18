import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

type ProfessionalRegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfessionalRegister'
>;

const ProfessionalRegisterScreen = () => {
  const navigation = useNavigation<ProfessionalRegisterScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Conteúdo da tela de cadastro do profissional */}
      <Text style={styles.title}>PsicoCare</Text>
      <Text style={styles.subtitle}>Cadastro de Profissional</Text>

      {/* Formulário de Cadastro */}
      <View style={styles.formContainer}>
        <Text style={styles.registerTitle}>Cadastre-se</Text>

        {/* Campo de Nome Completo */}
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          autoCapitalize="words"
        />

        {/* Campo de CRP */}
        <TextInput
          style={styles.input}
          placeholder="Número do CRP"
          keyboardType="numeric"
          autoCapitalize="none"
        />

        {/* Campo de Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Campo de Senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />

        {/* Campo de Confirmar Senha */}
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
        />

        {/* Botão de Cadastro */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => console.log('Cadastro do Profissional pressionado')}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Link para Login de Profissional */}
      <TouchableOpacity onPress={() => navigation.navigate('ProfessionalLogin')}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: RFValue(28),
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: height * 0.01,
  },
  subtitle: {
    fontSize: RFValue(18),
    color: '#4b5563',
    marginBottom: height * 0.03,
  },
  formContainer: {
    width: width * 0.9,
    backgroundColor: 'white',
    padding: width * 0.05,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  registerTitle: {
    fontSize: RFValue(20),
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: height * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: width * 0.03,
    marginBottom: height * 0.02,
    fontSize: RFValue(16),
  },
  registerButton: {
    backgroundColor: '#16a34a',
    padding: height * 0.02,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  buttonText: {
    color: 'white',
    fontSize: RFValue(16),
    fontWeight: '600',
  },
  linkText: {
    color: '#2563eb',
    fontWeight: '600',
    fontSize: RFValue(14),
    textAlign: 'center',
    marginTop: height * 0.02,
  },
});

export default ProfessionalRegisterScreen;