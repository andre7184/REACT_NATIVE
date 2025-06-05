
import React from 'react';
import { View, Text, Image } from 'react-native';

const ProductCard = ({ product }) => {
    return (
        <View className="bg-white rounded-lg shadow-md p-2 m-2">
            <Image source={{ uri: product.image }} className="w-32 h-32 "/>
            <Text className="text-lg font-bold">{product.title}</Text>
            <Text className="text-lg">{product.category}</Text>
            <Text className="text-gray-600">${product.price}</Text>
        </View>
    );
};

export default ProductCard;