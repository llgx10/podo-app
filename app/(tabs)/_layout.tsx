import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface TabBarIconProps {
  icon: ImageSourcePropType;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ icon }) => (
  <View style={styles.tabIconContainer}>
    <View style={styles.iconContainer}>
      <Image 
        source={icon} 
        style={styles.icon} 
      />
    </View>
  </View>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,  // Hide labels
        tabBarStyle: {
          display: 'none',  // Hide the tab bar
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => (
            <TabBarIcon
              icon={require('../../assets/images/app_icons/home.png')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="human"
        options={{
          tabBarIcon: () => (
            <TabBarIcon
              icon={require('../../assets/images/app_icons/human.png')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon: () => (
            <TabBarIcon
              icon={require('../../assets/images/app_icons/setting.png')}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // for Android shadow
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
