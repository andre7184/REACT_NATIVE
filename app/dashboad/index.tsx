import { Text, Image, TouchableOpacity, Linking, View, ScrollView } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 justify-top">
        <Text className="bg-blue-500 w-full text-white px-4 py-2 text-4xl font-bold">Dashboad</Text>
        <View className="flex-row p-2 h-50">
            <View className="flex-1 bg-white border border-gray-300 rounded-lg ml-1 mt-1 mb-1 p-2 shadow-lg ">
                <Text className="text-2xl font-bold text-black mb-1">Visitas</Text>
                <Text className="text-3xl font-bold text-blue-700 mb-1">1,500</Text>
                <Text className="text-1xl text-gray-700 mb-1">Utimos 7 dias</Text>
            </View>
            <View className="flex-1 bg-white border border-gray-300 rounded-lg ml-1 mt-1 mb-1 p-2 shadow-lg ">
                <Text className="text-2xl font-bold text-black mb-1">Vendas</Text>
                <Text className="text-3xl font-bold text-green-700 mb-1">320</Text>
                <Text className="text-1xl text-gray-700 mb-1">Utimos 7 dias</Text>
            </View>
            <View className="flex-1 bg-white border border-gray-300 rounded-lg ml-1 mt-1 mb-1 p-2 shadow-lg ">
                <Text className="text-2xl font-bold text-black mb-1">Novos Usuários</Text>
                <Text className="text-3xl font-bold text-yellow-600 mb-1">120</Text>
                <Text className="text-1xl text-gray-700 mb-1">Utimos 7 dias</Text>
            </View>
        </View>
        <View className="flex-1 p-2">
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View className="flex-1 bg-white border border-gray-300 rounded-lg m-1 p-3 shadow-lg ">
                    <Image source={require('../../assets/images/modelo-vestindo-fato-espacial.png')}    
                    style={{ width: '100%', height: 400, resizeMode: 'contain', alignSelf: 'center' }}
                    />
                    <Text className="ml-1 mt-2 text-3xl text-dark-200 font-bold">Item 01</Text>
                    <Text className="ml-1 mt-2 text-1xl text-dark-200">Traje espacial feito com material de fibra de carbono, revestido com algodão e com proteção uv, vem  completo com capacete, botas e luvas e preparados para viajar no espaço, incluindo os planetas e seus satelites.</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/andre7184')}>
                        <Text className="ml-1 mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-center">Ver Mais</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-1 bg-white border border-gray-300 rounded-lg m-1 p-3 shadow-lg ">
                    <Image source={require('../../assets/images/modelo-vestindo-fato-espacial.png')}    
                    style={{ width: '100%', height: 400, resizeMode: 'contain', alignSelf: 'center' }}
                    />
                    <Text className="ml-1 mt-2 text-3xl text-dark-200 font-bold">Item 02</Text>
                    <Text className="ml-1 mt-2 text-1xl text-dark-200">Traje espacial feito com material de fibra de carbono, revestido com algodão e com proteção uv, vem  completo com capacete, botas e luvas e preparados para viajar no espaço, incluindo os planetas e seus satelites.</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/andre7184')}>
                        <Text className="ml-1 mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-center">Ver Mais</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-1 bg-white border border-gray-300 rounded-lg m-1 p-3 shadow-lg ">
                    <Image source={require('../../assets/images/modelo-vestindo-fato-espacial.png')}    
                    style={{ width: '100%', height: 400, resizeMode: 'contain', alignSelf: 'center' }}
                    />
                    <Text className="ml-1 mt-2 text-3xl text-dark-200 font-bold">Item 03</Text>
                    <Text className="ml-1 mt-2 text-1xl text-dark-200">Traje espacial feito com material de fibra de carbono, revestido com algodão e com proteção uv, vem  completo com capacete, botas e luvas e preparados para viajar no espaço, incluindo os planetas e seus satelites.</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/andre7184')}>
                        <Text className="ml-1 mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-center">Ver Mais</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </View>
  );
}