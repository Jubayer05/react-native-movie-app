import { images } from 'assets/constants/images';
import { Link } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, Modal, ScrollView, Text, View } from 'react-native';
import { SearchBar } from '~/components/common/SearchBar';
import MovieCard from '~/components/features/Movies/MovieCard';
import MovieModal from '~/components/features/Movies/MovieModal';
import TrendingMovieCard from '~/components/features/Movies/TrendingMovieCard';
import { fetchPopularMovies } from '~/services/api';
import { getTrendingMovies } from '~/services/appwrite';
import useFetch from '~/services/useFetch';

const HomeRoot = () => {
  const { data, loading, error, reset, refetch } = useFetch(() =>
    fetchPopularMovies({ query: '' })
  );
  const [selectedMovie, setSelectedMovie] = useState(null);

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(() => getTrendingMovies());
  console.log(trendingMovies);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" resizeMode="cover" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          padding: 10,
        }}>
        <Image source={images.logo} className="mx-auto mb-5 mt-20 h-10 w-12" />
        <Link href="/search">
          <SearchBar placeholder="Search for a Movie" />
        </Link>

        {trendingMovies && trendingMovies.length > 0 && (
          <View className="mt-5">
            <Text className="mb-3 mt-5 text-lg font-bold text-white">Trending Movies</Text>
            <FlatList
              data={trendingMovies}
              renderItem={({ item, index }) => (
                <TrendingMovieCard item={item} onPress={() => setSelectedMovie(item)} index={index} />
              )}
              keyExtractor={(item) => item.movie_id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 10,
              }}
            />
          </View>
        )}

        {trendingLoading || loading ? (
          <ActivityIndicator size={'large'} color="#ffffff" className="mt-10 self-center" />
        ) : trendingError || error ? (
          <Text className="text-center text-white">Error fetching movies</Text>
        ) : (
          <>
            <Text className="mb-3 mt-5 text-lg font-bold text-white">
              Latest Movies {data?.results.length}
            </Text>

            <FlatList
              data={data?.results}
              renderItem={({ item }) => (
                <MovieCard item={item} onPress={() => setSelectedMovie(item)} />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                gap: 20,
                justifyContent: 'flex-start',
                paddingRight: 5,
                marginBottom: 10,
              }}
              style={{
                gap: 10,
              }}
              scrollEnabled={false}
            />

            <Modal
              visible={!!selectedMovie}
              transparent
              animationType="slide"
              onRequestClose={() => setSelectedMovie(null)}>
              {selectedMovie && (
                <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
              )}
            </Modal>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeRoot;
