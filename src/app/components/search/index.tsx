import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'


export function Search() {
    return (
        <View className='w-ful flex-row border border-slate-500 h-14 rounded-full gap-2 px-4 bg-transparent pb-2 items-center'>
            <Feather name='search' size={24} color="64748b" />
            <TextInput className='w-ful h-full flex-1 bg-transparent' placeholder='Procure sua comida...' />
        </View>
    );
}