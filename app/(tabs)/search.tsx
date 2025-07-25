import { images } from 'assets/constants/images';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SearchBar } from '~/components/common/SearchBar';
import MovieCard from '~/components/features/Movies/MovieCard';
import { fetchPopularMovies } from '~/services/api';
import { updateSearchCount } from '~/services/appwrite';
import useFetch from '~/services/useFetch';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    data,
    loading,
    error,
    reset,
    refetch: loadMovies,
  } = useFetch(() => fetchPopularMovies({ query: searchQuery }), false);

  useEffect(() => {
    // updateSearchCount(searchQuery, data?.results);

    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();

        if (data?.results.length > 0) {
          updateSearchCount(searchQuery, data?.results[0]);
        }
      } else {
        reset();
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full flex-1" resizeMode="cover" />

      <ScrollView className="flex-1 px-5">
        {loading ? (
          <ActivityIndicator size={'large'} color="#ffffff" className="mt-10 self-center" />
        ) : error ? (
          <Text className="text-center text-white">Error fetching movies</Text>
        ) : (
          <FlatList
            data={data?.results}
            renderItem={({ item }) => <MovieCard item={item} onPress={() => {}} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              padding: 10,
            }}
            columnWrapperStyle={{
              gap: 20,
              justifyContent: 'flex-start',
              paddingRight: 5,
              marginBottom: 10,
            }}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <View className="mt-20 w-full flex-row items-center justify-center">
                  <Image source={images.logo} className="mb-4 w-full" resizeMode="contain" />
                </View>
                <SearchBar
                  placeholder="Search for a Movie"
                  value={searchQuery}
                  onChangeText={(text) => setSearchQuery(text)}
                />

                {loading && (
                  <ActivityIndicator size={'large'} color="#ffffff" className="mt-10 self-center" />
                )}

                {error && (
                  <View className="mt-10 flex-row items-center justify-center">
                    <Text className="text-center text-red-500">Error fetching movies</Text>
                  </View>
                )}

                {!loading && !error && searchQuery.trim() && data?.results.length > 0 && (
                  <View className="ml-5 py-3">
                    <Text className="text-2xl font-bold text-white">Search Results</Text>
                    <Text className="text-sm text-white">
                      {data?.results.length} results found for{' '}
                      <Text className="font-bold text-accent">{searchQuery}</Text>
                    </Text>
                  </View>
                )}
              </>
            }
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center">
                <Text className="text-center text-white">No results found</Text>
              </View>
            }
            scrollEnabled={false}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default SearchPage;
