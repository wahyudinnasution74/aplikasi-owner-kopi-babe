import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  VStack,
} from "native-base";
import { editSupplier } from "./api";

export default function EditSupplier({ route, navigation }) {
  const [formData, setData] = React.useState({
    name: route.params.supplier.name,
    phone_number: route.params.supplier.phone_number,
    address: route.params.supplier.address,
  });

  const onSubmit = async () => {
    const payload = {
      name: formData.name,
      phone_number: formData.phone_number,
      address: formData.address,
    };

    const resp = await editSupplier(route.params.supplier._id, { ...payload });
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
              placeholder="quantity"
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
              placeholder="unit"
              value={formData.address}
              onChangeText={(value) => setData({ ...formData, address: value })}
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
