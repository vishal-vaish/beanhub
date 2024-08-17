import {View, Text} from "react-native";
import FormField from "@/components/FormField";
import {useState} from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <View className="mb-5">
      <FormField
        type="text"
        inputValue={searchInput}
        inputPlaceholder="Search Cafes"
        handleChangeText={(e) => setSearchInput(e)}
        icon={<AntDesign name="search1" size={24} color="black" />}
      />
    </View>
  );
};

export default Search;