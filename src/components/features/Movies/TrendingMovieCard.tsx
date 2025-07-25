import MaskedView from '@react-native-masked-view/masked-view';
import { images } from 'assets/constants/images';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const TrendingMovieCard = ({
  item,
  onPress,
  index,
}: {
  item: any;
  onPress: () => void;
  index: number;
}) => {
  return (
    <TouchableOpacity className="mx-3 w-32 rounded-xl" onPress={onPress}>
      <Image
        source={{ uri: item.poster_url }}
        className="h-48 w-full rounded-xl"
        resizeMode="cover"
      />

      <View className="absolute -left-3.5 bottom-9 rounded-full px-2 py-1">
        <MaskedView
          maskElement={<Text className="mt-1 text-6xl font-bold text-white">{index + 1}</Text>}>
          <Image source={images.rankingGradient} className="size-14" resizeMode="cover" />
        </MaskedView>
      </View>

      <Text className="mt-2 text-sm font-bold text-white" numberOfLines={1}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default TrendingMovieCard;
