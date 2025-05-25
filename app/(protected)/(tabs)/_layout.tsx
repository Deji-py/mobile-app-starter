import Avatar from "@/components/ui/avatar/avatar";
import iconsize from "@/styles/icons";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import { UnistylesRuntime } from "react-native-unistyles";

export default function TabLayout() {
  const theme = UnistylesRuntime.getTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderColor: "transparent",
          shadowOpacity: 0,
        },

        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <Feather size={iconsize.base + 2} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Feather size={iconsize.base + 2} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-post"
        options={{
          title: "Add Post",
          tabBarIcon: ({ color }) => (
            <Feather
              size={iconsize.base + 2}
              name="plus-square"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather size={iconsize.base + 2} name="heart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Avatar size="xs" alt="User" />,
        }}
      />
    </Tabs>
  );
}
