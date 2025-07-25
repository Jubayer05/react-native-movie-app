import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { PrimaryButton } from '~/components/button/PrimaryButton';

const AllMovie = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-2xl font-bold text-primary">All Movie </Text>
      <PrimaryButton title="Back to Search" onPress={() => router.push('/search ')} />
    </View>
  );
};

export default AllMovie;
