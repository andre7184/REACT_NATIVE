
import React from 'react';
import { View, Text, Image } from 'react-native';

const ProductCard = ({ product }) => {
    
console.log(product.image);

    return (
        <View className="bg-white rounded-lg shadow-md p-2 m-2">
            <Image source={{ uri: product.image }}  style={{ width: 126, height: 128, resizeMode: 'contain', alignSelf: 'center' }}/>
            <Text className="text-lg font-bold">{product.title}</Text>
            <Text className="text-lg">{product.category}</Text>
            <Text className="text-gray-600">${product.price}</Text>
        </View>
    );
};

export default ProductCard;