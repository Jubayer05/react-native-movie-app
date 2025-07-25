import { icons } from 'assets/constants/icons';
import { Tabs } from 'expo-router';
import { Image, ImageBackground, ImageSourcePropType, Text, View } from 'react-native';

const TabBarIcon = ({
  icon,
  focused,
  title,
}: {
  icon: ImageSourcePropType;
  focused: boolean;
  title: string;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={require('../../assets/images/highlight.png')}
        className="mx-1 mt-4 flex min-h-[53px] w-full 
        min-w-[100px] flex-1 flex-row items-center justify-center
        gap-2 overflow-hidden rounded-full">
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
          }}
          tintColor="#000000"
          resizeMode="contain"
        />
        <Text className="text-[12px] font-bold">{title}</Text>
      </ImageBackground>
    );
  }
  return (
    <View className="mt-4 size-full items-center justify-center rounded-full">
      <Image source={icon} tintColor="#A8B5DB" resizeMode="contain" />
      <Text className="text-[9px] font-bold text-white">{title}</Text>
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 36,
          marginHorizontal: 20,
          backgroundColor: '#0f0d23',
          borderWidth: 1,
          borderColor: '#0f0d23',
          height: 52,
          borderRadius: 200,
        },
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.home} title="Home" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.search} title="Search" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.save} title="Save" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.person} title="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
