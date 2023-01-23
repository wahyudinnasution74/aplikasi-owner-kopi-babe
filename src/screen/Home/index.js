import { useIsFocused } from "@react-navigation/native";
import { Box, Center, HStack, Text, VStack } from "native-base";
import React, { useEffect } from "react";
import { getProducts, getSupplier } from "./api";
import ProductCard from "./ProductCard";

export default function Home() {
  const isFocused = useIsFocused();
  const [products, setProducts] = React.useState([]);
  const [suppliers, setSuppliers] = React.useState([]);

  useEffect(() => {
    if (isFocused) {
      fetchProducts();
      fetchSupplier();
    }
  }, [isFocused]);

  const fetchProducts = async () => {
    const resp = await getProducts();
    setProducts(resp);
  };
  const fetchSupplier = async () => {
    const resp = await getSupplier();
    setSuppliers(resp);
  };

  return (
    <Box width="100%">
      <Center>
        <VStack>
          <Text fontSize={"2xl"} my={5}>
            Hi, Welcome Back!
          </Text>
          <HStack space={3} my={5}>
            <Box bgColor={"blue.300"} p={3} shadow={3} rounded="md">
              <VStack>
                <Text fontSize={"lg"} textAlign={"center"}>
                  Jumlah Product
                </Text>
                <Text textAlign={"center"}>{products.length}</Text>
              </VStack>
            </Box>
            <Box bgColor={"blue.300"} p={3} shadow={3} rounded="md">
              <VStack>
                <Text fontSize={"lg"} textAlign={"center"}>
                  Jumlah Supplier
                </Text>
                <Text textAlign={"center"}>{suppliers.length}</Text>
              </VStack>
            </Box>
          </HStack>
          <VStack>
            <Text fontSize={"2xl"} my={5}>
              Produk yang akan habis
            </Text>
            {products.length ? (
              <ProductCard item={products[0]} />
            ) : (
              <Text></Text>
            )}
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
}
