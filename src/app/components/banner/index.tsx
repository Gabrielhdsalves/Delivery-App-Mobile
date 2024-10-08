import { View, Pressable, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

export function Banner() {
 return (
   <View className='w-ful h-36 md:h-60 rounded-2xl mt-5 mb-4'> 
    <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable className='w-full h-36 md:h-60 rounded-2xl' key={"1"} onPress={()=> console.log("Clicou no banner 1")}>
            <Image className='w-full h-36 md:h-60 rounded-2xl' source={require("../../assets/banner1.png")}/>
        </Pressable>

        <Pressable className='w-full h-36 md:h-60 rounded-2xl' key={"2"} onPress={()=> console.log("Clicou no banner 2")}>
            <Image className='w-full h-36 md:h-60 rounded-2xl' source={require("../../assets/banner2.png")}/>
        </Pressable>
    </PagerView>
   </View>
  );
}
