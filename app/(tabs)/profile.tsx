import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { PrimaryButton } from '~/components/button/PrimaryButton';

const ProfilePage = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-2xl font-bold text-primary">Profile Page</Text>
      <PrimaryButton title="Home Page" className="my-2" onPress={() => router.push('/')} />
      <PrimaryButton title="Saved Page" className="my-2" onPress={() => router.push('/saved')} />
      <PrimaryButton title="Search Page" className="my-2" onPress={() => router.push('/search')} />
    </View>
  );
};

export default ProfilePage;
