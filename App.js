// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaPersonagens from './src/pages/ListaPersonagens';
import DetalhesPersonagem from './src/pages/DetalhesPersonagem'; 
import Naves from './src/pages/Naves'; 
import Filmes from './src/pages/Filmes'; 
import Sobre from './src/pages/Sobre';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    // telas
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#F5F5F5',
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      >
        <Stack.Screen 
          component={ListaPersonagens}
          name="ListaPersonagens"
          options={({ navigation }) => ({
            title: 'Lista de Personagens',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
                <Text style={{ marginRight: 20, fontWeight: 'bold' }}>Sobre</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          component={DetalhesPersonagem}
          name="DetalhesPersonagem"
          options={{
            title: 'Detalhes do Personagem'
          }}
        />
        <Stack.Screen 
          component={Naves}
          name="Naves"
          options={{
            title: 'Naves'
          }}
        />
        <Stack.Screen 
          component={Filmes}
          name="Filmes"
          options={{
            title: 'Filmes'
          }}
        />
        <Stack.Screen 
          component={Sobre}
          name="Sobre"
          options={{
            title: 'Sobre',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
