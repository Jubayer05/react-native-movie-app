import { images } from 'assets/constants/images';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const MovieCard = ({ item, onPress }: { item: any; onPress: () => void }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
  return (
    <TouchableOpacity className="w-[30%]" onPress={onPress}>
      <Image source={{ uri: imageUrl }} className="h-48 w-full rounded-xl" resizeMode="cover" />
      <Text className="mt-2 text-sm font-bold text-white" numberOfLines={1}>
        {item.title}
      </Text>
      <View className="flex-row items-end justify-start gap-1">
        <Image source={images.star} className="h-4 w-4" />
        <Text className="mt-1 text-sm font-bold text-white">
          {(item.vote_average / 2).toFixed(1)}
        </Text>
      </View>
      <View className="mt-2 flex-row items-center justify-between">
        <Text className="text-xs text-white">{item.release_date.split('-')[0]}</Text>
        <Text className="text-xs text-white">{item.original_language}</Text>
      </View>

      <View className="mt-2 flex-row items-center justify-between">
        <Text className="text-xs text-white">{item.type} min</Text>
        <Text className="text-xs text-white">{item.vote_count} votes</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
