import {View, Text, FlatList, Image, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {products} from "@/constants/data";
import ItemCard from "@/components/ItemCard";
import icons from "@/constants/icons";
import {useAuth} from "@/context/AuthProvider";

const Home = () => {
  const {logout} = useAuth();

  return (
    <SafeAreaView className="bg-background h-full px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ItemCard/>
        )}
        ListHeaderComponent={() => (
          <View>
            <View>
            <Text className="text-iconColor text-base font-pbold">Location:</Text>
            <Text className="font-pmedium text-base">Kolkata</Text>
            </View>
            <View>
              <Image
                source={icons.bell}
                className="w-[50px] h-[50px]"
                resizeMode="contain"
              />

              <TouchableOpacity
                onPress={logout}
              >
                <Text>Press</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home;