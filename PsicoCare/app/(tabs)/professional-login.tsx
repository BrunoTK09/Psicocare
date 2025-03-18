import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

type ProfessionalLoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfessionalLogin'
>;

const ProfessionalLoginScreen = () => {
  const navigation = useNavigation<ProfessionalLoginScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Conteúdo da tela de login do profissional */}
      <Text style={styles.title}>PsicoCare</Text>
      <Text style={styles.subtitle}>Área do Profissional</Text>

      {/* Formulário de Login */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login</Text>

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

        {/* Botão de Login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => console.log('Login do Profissional pressionado')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Link para Cadastro de Profissional */}
        <TouchableOpacity onPress={() => navigation.navigate('ProfessionalRegister')}>
          <Text style={styles.linkText}>Cadastre-se como Profissional</Text>
        </TouchableOpacity>
      </View>
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
  loginTitle: {
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
  loginButton: {
    backgroundColor: '#2563eb',
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

export default ProfessionalLoginScreen;