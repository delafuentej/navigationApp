/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './presentation/routes/DrawerNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
