import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import Config from '../screens/Config';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
      <Drawer.Navigator screenOptions={{title:''}}>
        <Drawer.Screen 
        name="principal" 
        component={TabRoutes}
        options={{
            drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
            drawerLabel: 'Inicio'
        }}
        />
         <Drawer.Screen 
        name="config" 
        component={Config}
        options={{
            drawerIcon: ({color, size}) => <Feather name="settings" color={color} size={size}/>,
            drawerLabel: 'Configurações'
        }}
        />
      </Drawer.Navigator>
    );
  }