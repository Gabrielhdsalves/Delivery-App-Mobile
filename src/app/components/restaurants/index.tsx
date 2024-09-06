import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import RestaurantsData from './restaurantsData';

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export function Restaurants({horizontal}: {horizontal: boolean}) {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);
    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch('http://192.168.0.101:3000/restaurants');
            const data = await response.json();
            setRestaurants(data);
        }
        getRestaurants();
    }, [])
    return (
        <View>
      {horizontal ? (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantsData restaurant={item} />}
          horizontal={true}
          contentContainerStyle={{
            gap: 12,
            paddingHorizontal: 18,
            marginVertical: 12,
          }}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 w-full px-6 mb-8">
          {restaurants.map((restaurant) => (
           
                <RestaurantsData
                    key={restaurant.id}
                    restaurant={restaurant}
                    horizontal={true}
                />
           
          ))}
        </View>
      )}
    </View>
    );
}