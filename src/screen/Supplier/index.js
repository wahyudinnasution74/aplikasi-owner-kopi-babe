// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { getSupplier } from "./api";
import React from "react";
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  VStack,
  Text,
  Spacer,
  Button,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useIsFocused } from "@react-navigation/native";

export default function Supplier({ navigation }) {
  const isFocused = useIsFocused();
  const [data, setData] = React.useState({});

  useEffect(() => {
    if (isFocused) {
      fetchSupplier();
    }
  }, [isFocused]);

  const fetchSupplier = async () => {
    const resp = await getSupplier();
    setData(resp);
  };

  const onEdit = (item) => {
    navigation.navigate("EditSupplier", { supplier: item });
  };

  return (
    <Box width="100%">
      <Box position={"absolute"} zIndex={10} bottom={5} right={5}>
        <Button onPress={() => navigation.navigate("NewSupplier")}>
          Tambah Supplier
        </Button>
      </Box>
      <FlatList
        data={data}
        renderItem={({ item, key }) => (
          <Box
            key={key}
            py="3"
            px={"3"}
            mx={3}
            my={3}
            shadow={3}
            bg={"white"}
            rounded="lg"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
                bgColor={"tomato"}
              >
                {item.username &&
                  item.username.split("").splice(0, 2).join("").toUpperCase()}
              </Avatar>
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="tomato"
                  bold
                >
                  {item.name}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.address}
                </Text>
              </VStack>
              <Spacer />
              <Button
                variant={"ghost"}
                rounded="full"
                onPress={() => onEdit(item)}
              >
                <Ionicons name="create-outline" size={20} color="tomato" />
              </Button>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item._id}
      />
    </Box>
  );
}
