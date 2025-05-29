import { Text, TextInput, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const [tarefa, setTarefa] = useState<string>("");
const [listaTarefas, setListaTarefas] = useState<string[]>([]);

function addTarefaToList() {
    if (tarefa.trim() !== '') {
        setListaTarefas([...listaTarefas, tarefa]);
        setTarefa('');
    }
}

export default function Index() {
  return (
    <View className="flex-1 justify-top">
        <TextInput onChangeText={setTarefa} className="border border-gray-300 p-3 mb-4 shadow-md text-gray-700" placeholder="Digite a Tarefa" placeholderTextColor="#aaa" />
        <TouchableOpacity onPress={addTarefaToList}>
            <Text className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">Adicionar Tarefa</Text>
        </TouchableOpacity>
        <Text className="text-black text-1xl font-bold text-center mb-2">Total de Tarefas: {}</Text>
    </View>
  );
}