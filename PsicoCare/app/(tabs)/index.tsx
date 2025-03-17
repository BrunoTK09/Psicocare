import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

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
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563eb', // Azul
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b', // Cinza escuro
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db', // Cinza claro
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#2563eb', // Azul
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  professionalButton: {
    backgroundColor: '#16a34a', // Verde
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db', // Cinza claro
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#6b7280', // Cinza médio
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#6b7280', // Cinza médio
  },
  signupLink: {
    color: '#2563eb', // Azul
    fontWeight: '600',
  },
});