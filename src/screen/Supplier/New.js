import React from "react";
import { createSupplier } from "./api";
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  VStack,
} from "native-base";

export default function NewSupplier({ navigation }) {
  const [formData, setData] = React.useState({
    name: "",
    phone_number: "",
    address: "",
    username: "",
    password: "",
  });

  const onSubmit = async () => {
    const payload = {
      name: formData.name,
      phone_number: formData.phone_number,
      address: formData.address,
      username: formData.username,
      password: formData.password,
    };

    const resp = await createSupplier(payload);
    navigation.navigate("Suppliers");
  };

  return (
    <ScrollView>
      <Box width="100%">
        <VStack mx="3">
          <FormControl isRequired my={2}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Name
            </FormControl.Label>
            <Input
              placeholder="name"
              value={formData.name}
              onChangeText={(value) => setData({ ...formData, name: value })}
            />
          </FormControl>
          <FormControl isRequired my={2}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Nomor Hp
            </FormControl.Label>
            <Input
              placeholder="Nomor Hp"
              value={String(formData.phone_number)}
              onChangeText={(value) =>
                setData({ ...formData, phone_number: value })
              }
            />
          </FormControl>
          <FormControl isRequired my={2}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Alamat
            </FormControl.Label>
            <Input
              placeholder="Alamat"
              value={String(formData.address)}
              onChangeText={(value) => setData({ ...formData, address: value })}
            />
          </FormControl>
          <FormControl isRequired my={2}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Username
            </FormControl.Label>
            <Input
              placeholder="Username"
              value={formData.username}
              onChangeText={(value) =>
                setData({ ...formData, username: value })
              }
            />
          </FormControl>

          <FormControl isRequired my={2}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Password
            </FormControl.Label>
            <Input
              placeholder="Password"
              value={formData.password}
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
          </FormControl>

          <Button mt={3} onPress={onSubmit}>
            Submit
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}
