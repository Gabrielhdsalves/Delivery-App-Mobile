import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
    return (
        <View className="bg-red-50 w-full flex-row items-center justify-between">
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={20} color="#121212" />
            </Pressable>

            <View className="flex-col items-center justify-center">
                <Text className="text-center text-sm">Localização</Text>

                <View className="flex-row items-center justify-center gap-1">
                    <Feather name="map-pin" size={14} color="#FF0000" />
                    <Text className="text-lg font-bold">São Paulo - SP</Text>
                </View>
            </View>

            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Feather name="bell" size={20} color="#121212" />
            </Pressable>
        </View>
    );
}