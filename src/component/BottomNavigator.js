import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screen/Home";
import Product from "../screen/Product";
import Logout from "../screen/Logout";
import Supplier from "../screen/Supplier";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          if (route.name === "Products")
            iconName = focused ? "cube" : "cube-outline";
          if (route.name === "Logout")
            iconName = focused ? "log-out-outline" : "log-out-outline";
          if (route.name === "Suppliers")
            iconName = focused ? "people" : "people-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Product} />
      <Tab.Screen name="Suppliers" component={Supplier} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}
