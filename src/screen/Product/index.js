// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { getProducts } from "./api";
import React from "react";
import { Box, Button, FlatList, useDisclose } from "native-base";
import ProductCard from "./ProductCard";
import { useIsFocused } from "@react-navigation/native";

export default function Product({ navigation }) {
  const isFocused = useIsFocused();
  const [data, setData] = React.useState({});

  useEffect(() => {
    if (isFocused) {
      fetchProducts();
    }
  }, [isFocused]);

  const fetchProducts = async () => {
    const resp = await getProducts();
    setData(resp);
  };

  return (
    <Box width="100%">
      <Box position={"absolute"} zIndex={10} bottom={5} right={5}>
        <Button onPress={() => navigation.navigate("NewProduct")}>
          Tambah Produk
        </Button>
      </Box>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            fetchProducts={fetchProducts}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </Box>
  );
}
