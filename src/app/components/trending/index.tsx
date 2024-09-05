import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardHorizontalFood } from './food';

export interface FoodProps {
    id:string;
    name:string;
    price:number;
    time:string;
    delivery:number;
    rating:number;
    image:string;
    restaurantId:string;
}

export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([]);
    useEffect(() => {
        async function getFoods(){
            const response = await fetch('http://192.168.0.101:3000/foods');
            const data = await response.json();
            console.log(data);
            setFoods(data);
        }
        getFoods();
    }, [])
    return (
        <FlatList 
            data={foods}
            horizontal={true}
            renderItem={({ item }) => <CardHorizontalFood food={item}/>}
            contentContainerStyle={{gap: 14, paddingHorizontal: 18}}
            showsHorizontalScrollIndicator={false}
        />
    );
}