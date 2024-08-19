import {View, Text, Image} from "react-native";
import {ItemCardTypes} from "@/utils/types";
import {AntDesign, FontAwesome, Ionicons} from "@expo/vector-icons";
import {COLOR} from "@/utils/constant";

type Props = {
  data: ItemCardTypes;
}

const ItemCard = (props: Props) => {

  return (
    <View className="mb-5">
      <Image
        source={{uri: props.data.images[0]}}
        className="w-full h-[200px] rounded-lg"
        resizeMode="cover"
      />
      <View className="flex-row justify-between">
        <View className="flex-col gap-2">
          <Text className="text-xl mt-2">
            {props.data.cafeName}
          </Text>
          <View className="flex-row text-base">
            {(Object.keys(props.data.items)).map((key, index, array) => (
              <View key={key} className="flex-row text-3xl">
                <Text className="text-gray-500">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Text>
                {index < array.length - 1 && (
                  <Text className="text-gray-500">{" "}- {" "}</Text>
                )}
              </View>
            ))}
          </View>
          <View className="flex-row">
            <View className="flex-row text-base items-center mr-5 gap-2">
              <Ionicons name="star" size={24} color={COLOR.iconColor}/>
              <Text>{props.data.rating}</Text>
            </View>
            <View className="flex-row text-base items-center gap-2">
              <FontAwesome name="car" size={24} color={COLOR.iconColor}/>
              <Text>{props.data.distance}</Text>
            </View>
          </View>
        </View>
        <View className="mt-5 mr-3">
          {props.data.closed ? (
            <Text className="rounded-lg bg-green-500 text-white py-2 px-2 text-base">
              Opened
            </Text>
          ) : (
            <Text className="rounded-lg bg-red-500 text-white py-2 px-2 text-base">
              Closed
            </Text>
          )}
        </View>
      </View>
    </View>
  )
}

export default ItemCard;