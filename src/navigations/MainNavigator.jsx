import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

export default MainNavigator