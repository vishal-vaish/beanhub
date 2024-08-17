import {View, Text, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {products} from "@/constants/data";
import ItemCard from "@/components/ItemCard";
import {Feather} from "@expo/vector-icons";
import Search from "@/components/Search";

const Home = () => {

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        className="mx-3"
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ItemCard
            key={item.id}
            data={item}
          />
        )}
        ListHeaderComponent={() => (
          <View className="">
          <View className="flex-row justify-between px-2 items-center">
            <View>
              <Text className="text-iconColor text-sm font-pbold">Location:</Text>
              <Text className="font-pmedium text-base">hazra road, kolkata</Text>
            </View>
              <Feather name="bell" size={30} color="black" />
          </View>
            <Text className="font-pmedium text-heading mt-5 text-xl">Welcome back,</Text>
            {/*Search bar*/}
              <Search/>

            {/*All Category*/}

          </View>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default Home;