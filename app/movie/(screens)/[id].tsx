import { router, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { PrimaryButton } from '~/components/button/PrimaryButton';

const MoviePage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-2xl font-bold text-primary">Movie Page {id}</Text>
      <PrimaryButton title="Back to Home" onPress={() => router.push('/')} />
    </View>
  );
};

export default MoviePage;
