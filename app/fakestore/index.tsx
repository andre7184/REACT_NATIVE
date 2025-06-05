// Buscar os produtos da Fake Store API
// (https://fakestoreapi.com/products).
// Exibir uma lista de produtos, mostrando:
// 📷 Imagem
// 🏷 Nome do produto
// 📂 Categoria
// 💲 Preço
// Criar um componente ProductCard para exibir cada produto de
// forma organizada.
// Aplicar estilização responsiva usando NativeWind.
// Exibir um indicador de carregamento enquanto os dados não são
// carregados

import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function FakeStore() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#6200ea" />
            </View>
        );
    }

    return (
        <ScrollView className="flex-1 bg-white px-2">
            {products.map((item: any) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </ScrollView>
    )
}