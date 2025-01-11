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
import Mindmap from './screens/Mindmap';
import Setting from './screens/Setting';
// 
import NameCollect from './screens/NameCollect';
import FlashCard from './screens/FlashCard';
import MindMapShow from './screens/MindmapShow';
import MindmapCreate from './screens/MindmapCreate';
import Quiz from './screens/Quiz';
import FillInTheBlank from './screens/FillInTheBlank';

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
          <Stack.Screen name='Mindmap' component={Mindmap} />
          <Stack.Screen name='Setting' component={Setting} />

          {/* < */}
          <Stack.Screen name="NameCollect" component={NameCollect} />
          <Stack.Screen name="FlashCard" component={FlashCard} />
          <Stack.Screen name="MindMapShow" component={MindMapShow} />
          <Stack.Screen name="MindmapCreate" component={MindmapCreate} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="FillInTheBlank" component={FillInTheBlank} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderTotal>
  )
}

export default App;