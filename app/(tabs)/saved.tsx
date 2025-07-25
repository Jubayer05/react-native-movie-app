import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { PrimaryButton } from '~/components/button/PrimaryButton';

const SavedPage = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-2xl font-bold text-primary">Saved Page</Text>
      <PrimaryButton title="Go to Search" onPress={() => router.push('/search')} />
    </View>
  );
};

export default SavedPage;
