import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      {/* Título do App */}
      <Text style={styles.title}>PsicoCare</Text>

      {/* Formulário de Login */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login</Text>

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
          onPress={() => console.log('Login pressionado')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Divisor */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Botão de Login como Profissional */}
        <TouchableOpacity
          style={styles.professionalButton}
          onPress={() => console.log('Login como Profissional pressionado')}
        >
          <Text style={styles.buttonText}>Entrar como Profissional</Text>
        </TouchableOpacity>
      </View>

      {/* Link para Cadastro */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => console.log('Cadastro pressionado')}>
          <Text style={styles.signupLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6', // Cor de fundo cinza claro
    paddingHorizontal: width * 0.05, // 5% da largura da tela
  },
  title: {
    fontSize: RFValue(24), // Fonte responsiva
    fontWeight: 'bold',
    color: '#2563eb', // Azul
    marginBottom: height * 0.02, // 2% da altura da tela
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
  professionalButton: {
    backgroundColor: '#16a34a', // Verde
    padding: height * 0.02, // 2% da altura da tela
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: RFValue(16), // Fonte responsiva
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02, // 2% da altura da tela
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db', // Cinza claro
  },
  dividerText: {
    marginHorizontal: width * 0.03, // 3% da largura da tela
    color: '#6b7280', // Cinza médio
    fontSize: RFValue(14), // Fonte responsiva
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