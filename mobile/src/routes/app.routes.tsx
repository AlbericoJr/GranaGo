import {createDrawerNavigator} from "@react-navigation/drawer"

import Home from "../pages/Home"
import New from "../pages/New"
import Profile from "../pages/Profile"
import CustomDrawer from "../components/CustomDrawer"

const AppDrawer = createDrawerNavigator()

export default function AppRoutes() {
  return(
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,

        drawerStyle:{
          backgroundColor: '#1A202C',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#C59B2D',
        drawerActiveTintColor: '#fff',
        
        drawerInactiveBackgroundColor: '#D1D9E6',
        drawerInactiveTintColor: '#1A202C',

        drawerLabelStyle:{
          fontSize: 17,
          fontWeight: 'bold',
        },

        drawerItemStyle:{
          borderRadius: 4,
          marginBottom: 14,
        }

      }}
    >
      <AppDrawer.Screen 
        name="Home" 
        component={Home} 
      />
      
      <AppDrawer.Screen 
        name="Registrar" 
        component={New} 
      />
      
      <AppDrawer.Screen 
        name="Perfil" 
        component={Profile} 
      />
    </AppDrawer.Navigator>
  )
}