import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index(){

  const [tarefa, setTarefa] = useState("")
  const [listaTarefas, setListaTarefas] = useState<string[]>([]);

  function addTarefaToList() {
    console.log(tarefa.trim());
    if (tarefa.trim() !== '') {
        setListaTarefas([...listaTarefas, tarefa.trim()]);
        setTarefa('');
    }
  }

  function DellTarefaToList(key: number) {
    console.log(key);
    const newTarefas = [...listaTarefas];
    newTarefas.splice(key, 1);
    setListaTarefas(newTarefas);
  }

  return (

    <View>
      <TextInput value={tarefa} onChangeText={setTarefa} placeholder="Digite a Tarefa" className="border border-gray-300 p-3 mb-2 shadow-md text-gray-700"/>
      <TouchableOpacity onPress={addTarefaToList}>
        <Text className="m-2 bg-blue-500 rounded hover:bg-blue-700 text-white px-4 py-2">Adicionar Tarefa</Text>
      </TouchableOpacity>
      <Text className="text-black text-1xl font-bold text-center mb-2">Total de Tarefas: {listaTarefas.length}</Text>
      <View>
        {listaTarefas.map((tarefa, index) => (
          <View key={index} className="flex-row justify-between items-center border-b border-gray-300 px-4 py-3">
            <Text className="text-base flex-1">{tarefa}</Text>
            <TouchableOpacity onPress={() => DellTarefaToList(index)}>
              <Text className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Deletar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}