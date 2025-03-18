import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

const ProfessionalLoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Título do App */}
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

        {/* Link para Esqueci a Senha */}
        <TouchableOpacity onPress={() => console.log('Esqueci a senha pressionado')}>
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      {/* Link para Cadastro de Profissional */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => console.log('Cadastro de Profissional pressionado')}>
          <Text style={styles.signupLink}>Cadastre-se como Profissional</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfessionalLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6', // Cor de fundo cinza claro
    paddingHorizontal: width * 0.05, // 5% da largura da tela
  },
  title: {
    fontSize: RFValue(28), // Fonte responsiva
    fontWeight: 'bold',
    color: '#2563eb', // Azul
    marginBottom: height * 0.01, // 1% da altura da tela
  },
  subtitle: {
    fontSize: RFValue(18), // Fonte responsiva
    color: '#4b5563', // Cinza escuro
    marginBottom: height * 0.03, // 3% da altura da tela
  },
  formContainer: {
    width: width * 0.9, // 90% da largura da tela
    backgroundColor: 'white',
    padding: width * 0.05, // 5% da largura da tela
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginTitle: {
    fontSize: RFValue(20), // Fonte responsiva
    fontWeight: '600',
    color: '#1e293b', // Cinza escuro
    marginBottom: height * 0.02, // 2% da altura da tela
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db', // Cinza claro
    borderRadius: 8,
    padding: width * 0.03, // 3% da largura da tela
    marginBottom: height * 0.02, // 2% da altura da tela
    fontSize: RFValue(16), // Fonte responsiva
  },
  loginButton: {
    backgroundColor: '#2563eb', // Azul
    padding: height * 0.02, // 2% da altura da tela
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: height * 0.02, // 2% da altura da tela
  },
  buttonText: {
    color: 'white',
    fontSize: RFValue(16), // Fonte responsiva
    fontWeight: '600',
  },
  forgotPasswordText: {
    color: '#2563eb', // Azul
    fontSize: RFValue(14), // Fonte responsiva
    textAlign: 'center',
    marginTop: height * 0.01, // 1% da altura da tela
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: height * 0.03, // 3% da altura da tela
  },
  signupText: {
    color: '#6b7280', // Cinza médio
    fontSize: RFValue(14), // Fonte responsiva
  },
  signupLink: {
    color: '#2563eb', // Azul
    fontWeight: '600',
    fontSize: RFValue(14), // Fonte responsiva
  },
});