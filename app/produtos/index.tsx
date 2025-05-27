import { Text, Image, TouchableOpacity, Linking, View } from "react-native";
export default function Index() {
  return (
    <View className="justify-top">
        <Text className="bg-blue-500 w-full text-white px-4 py-2 text-4xl font-bold">Detalhes do Produto</Text>
        <View className="flex-1 justify-center items-center">
            <Image source={require('../../assets/images/modelo-vestindo-fato-espacial.png')}    
            style={{ width: 300, height: 500 }}
            />
        </View>
        <Text className="ml-1 mt-2 text-3xl text-dark-200 font-bold">Produto Excepcional</Text>
        <Text className="ml-1 mt-2 text-1xl text-dark-200">Traje espacial feito com material de fibra de carbono, revestido com algodão e com proteção uv, vem  completo com capacete, botas e luvas e preparados para viajar no espaço, incluindo os planetas e seus satelites.</Text>
        <Text className="ml-1 mt-2 text-2xl text-green-400">R$ 600.000.000</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/andre7184')}>
            <Text className="ml-1 mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-center">Comprar Agora</Text>
        </TouchableOpacity>

    </View>
  );
}