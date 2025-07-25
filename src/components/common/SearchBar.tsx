import { icons } from 'assets/constants/icons';
import { Image, TextInput, View } from 'react-native';

type SearchBarProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export const SearchBar = ({ placeholder, value, onChangeText }: SearchBarProps) => {
  return (
    <View className="flex-row items-center rounded-full border-[1px] border-[#ac8bff60] bg-dark-200 px-5 py-2">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="ml-2 flex-1 text-base font-medium text-white"
        placeholderTextColor="#ab8bff"
      />
    </View>
  );
};
