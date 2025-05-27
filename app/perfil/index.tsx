import { Text, Image, TouchableOpacity, Linking, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={{ uri: 'https://avatars.githubusercontent.com/u/172203482?v=4' }} className="w-32 h-32 rounded-full"/>
      <Text className="mt-2 text-5xl text-dark-200 font-bold">André Brandão</Text>
      <Text className="mt-2 text-2xl text-dark-200">Idade: 41 anos</Text>
      <Text className="mt-2 text-2xl text-dark-200">Localização: Campo Grande - MS</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/andre7184')}>
        <Text className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full">Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
}