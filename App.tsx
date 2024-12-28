import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProviderTotal } from './data/store';
import clrStyle from './assets/componentStyleSheet';
import { ColorValue } from 'react-native';

// screen import
import BottomTab from './assets/BottomTab';
import Home from './screens/Home';
import Test from './screens/Test';
// 
import NameCollect from './screens/NameCollect';

// ____________________END OF IMPORT_______________________

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {

  return (
    <ProviderTotal>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: clrStyle.white as ColorValue } }}>
          <Stack.Screen name="BottomTab" component={BottomTab} />

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Test" component={Test} />

          {/* < */}
          <Stack.Screen name="NameCollect" component={NameCollect} />

        </Stack.Navigator>
      </NavigationContainer>
    </ProviderTotal>
  )
}

export default App;