import { createStackNavigator } from '@react-navigation/stack';
import ProfessionalLoginScreen from '../app/(tabs)/professional-login';
import ProfessionalRegisterScreen from '../app/(tabs)/professional-register';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProfessionalLogin">
      <Stack.Screen name="ProfessionalLogin" component={ProfessionalLoginScreen} />
      <Stack.Screen name="ProfessionalRegister" component={ProfessionalRegisterScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;