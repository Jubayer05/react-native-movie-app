import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { PrimaryButton } from '~/components/button/PrimaryButton';

const { width, height } = Dimensions.get('window');

const MovieModal = ({ movie, onClose }: { movie: any; onClose: () => void }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500`;
  return (
    <View className="flex-1 bg-black/90">
      <StatusBar barStyle="light-content" />

      {/* Header with backdrop */}
      <View className="relative">
        {movie.backdrop_path ? (
          <Image
            source={{ uri: `${imageUrl}${movie.backdrop_path}` }}
            style={{ width, height: height * 0.4 }}
            className="opacity-80"
            resizeMode="cover"
          />
        ) : (
          <View style={{ width, height: height * 0.4 }} className="bg-gray-800" />
        )}

        {/* Gradient overlay */}
        <View
          style={{ width, height: height * 0.4 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
        />

        {/* Close button */}
        <TouchableOpacity
          onPress={onClose}
          className="absolute right-4 top-12 z-10 rounded-full bg-black/50 p-2">
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        className="mt-3 flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Movie info section */}
        <View className="relative  flex-row">
          {/* Poster */}
          <View className="mr-4 rounded-lg bg-gray-700 shadow-lg">
            {movie.poster_path ? (
              <Image
                source={{ uri: `${imageUrl}${movie.poster_path}` }}
                className="h-40 w-28 rounded-lg"
                resizeMode="cover"
              />
            ) : (
              <View className="h-40 w-28 items-center justify-center rounded-lg bg-gray-600">
                <Ionicons name="image-outline" size={40} color="#9CA3AF" />
              </View>
            )}
          </View>

          {/* Title and basic info */}
          <View className="flex-1 justify-end pb-2">
            <Text className="text-2xl font-bold text-white" numberOfLines={2}>
              {movie.title || movie.name}
            </Text>

            {movie.release_date && (
              <Text className="mt-1 text-gray-300">
                {new Date(movie.release_date).getFullYear()}
              </Text>
            )}

            {movie.vote_average > 0 && (
              <View className="mt-2 flex-row items-center">
                <Ionicons name="star" size={16} color="#FCD34D" />
                <Text className="ml-1 font-semibold text-yellow-300">
                  {movie.vote_average.toFixed(1)}
                </Text>
                <Text className="ml-1 text-gray-400">({movie.vote_count} votes)</Text>
              </View>
            )}
          </View>
        </View>

        {/* Genres */}
        {movie.genre_ids && movie.genre_ids.length > 0 && (
          <View className="mt-4">
            <View className="flex-row flex-wrap">
              {movie.genre_ids.slice(0, 3).map((genreId: number, index: number) => (
                <View key={genreId} className="mb-2 mr-2 rounded-full bg-blue-600/20 px-3 py-1">
                  <Text className="text-sm text-blue-300">{getGenreName(genreId)}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Overview */}
        {movie.overview && (
          <View className="mt-6">
            <Text className="mb-3 text-lg font-semibold text-white">Overview</Text>
            <Text className="leading-6 text-gray-300">{movie.overview}</Text>
          </View>
        )}

        {/* Additional Info */}
        <View className="mt-6 space-y-3">
          {movie.original_language && (
            <View className="flex-row items-center">
              <Text className="w-24 font-semibold text-gray-400">Language:</Text>
              <Text className="uppercase text-white">{movie.original_language}</Text>
            </View>
          )}

          {movie.popularity && (
            <View className="flex-row items-center">
              <Text className="w-24 font-semibold text-gray-400">Popularity:</Text>
              <Text className="text-white">{Math.round(movie.popularity)}</Text>
            </View>
          )}
        </View>

        <View className="mt-6 flex-row justify-end">
          <Link href={`/movie/${movie.id}`} asChild>
            <PrimaryButton title="View Details" className="w-full" />
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

// Helper function to map genre IDs to names
const getGenreName = (genreId: number) => {
  const genreMap = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };

  return genreMap[genreId as keyof typeof genreMap] || 'Unknown';
};

export default MovieModal;
