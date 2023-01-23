import { Box, HStack, Text, VStack } from "native-base";
import React from "react";

export default function ProductCard({ item }) {
  return (
    <Box py="3" px={"3"} mx={3} my={3} shadow={3} bg={"white"} rounded="lg">
      <HStack justifyContent="space-between">
        <VStack>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="tomato"
            bold
            fontSize={"lg"}
          >
            {item.name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {item.quantity} {item.unit}
          </Text>
          <VStack mt={3}>
            <Text color="tomato">Supplier:</Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {item.supplier.name}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {item.supplier.address}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
}
