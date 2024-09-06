import { Text, View, ScrollView } from "react-native";
import { Header } from "./components/header";
import Constants from "expo-constants";
import { Banner } from "./components/banner";
import { Search } from "./components/search";
import { Section } from "./components/section";
import { TrendingFoods } from "./components/trending";
import { Restaurants } from "./components/restaurants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header></Header>
        <Banner></Banner>
        <Search></Search>
      </View>
      <Section name="Comidas em Alta" label="Veja mais" size="text-2xl" action={() => console.log("Clickou no vejam mais")} />
      <TrendingFoods />
      <Section name="Famosos no DevFood" label="Veja todos" size="text-2xl" action={() => console.log("Clickou no veja todos")} />
      <Restaurants horizontal = {true} />
      <Section name="Restaurantes" label="Veja todos" size="text-2xl" action={() => console.log("Clickou no veja todos")} />
      <Restaurants horizontal = {false} />
    </ScrollView>
  );
}
