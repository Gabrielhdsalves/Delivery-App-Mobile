import { Pressable, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantProps } from "..";

export default function RestaurantsData({
  restaurant,
  horizontal,
}: {
  restaurant: RestaurantProps;
  horizontal?: boolean;
}) {
  return (
    <Pressable
      className={`flex items-center gap-2 ${
        horizontal ? "flex-row mt-3" : "flex-col"
      }`}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <View className={`${horizontal ? "flex-col" : "flex-row"} flex gap-1 `}>
        <Text className="text-base font-medium text-zinc-800">
          {restaurant.name}
        </Text>
          {horizontal ? (
            <View className="flex flex-row gap-1 items-center">
              <Ionicons name="star" size={20} color="#ca8a04" />
              <Text className="text-sm text-yellow-500">5.0</Text>
            </View>
          ) : null}
      </View>
    </Pressable>
  );
}