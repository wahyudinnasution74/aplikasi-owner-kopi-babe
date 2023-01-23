import React from "react";
import { editProduct } from "./api";
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  VStack,
} from "native-base";

export default function EditProduct({ route, navigation }) {
  const [formData, setData] = React.useState({
    name: route.params.product.name,
    quantity: route.params.product.quantity,
    unit: route.params.product.unit,
    minimumQuantity: route.params.product.minimumQuantity || 0,
  });

  const onSubmit = async () => {
    const payload = {
      name: formData.name,
      quantity: Number(formData.quantity),
      unit: formData.unit,
      minimumQuantity: Number(formData.minimumQuantity),
    };

    const resp = await editProduct(route.params.product._id, { ...payload });
    navigation.navigate("Products");
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
              Quantity
            </FormControl.Label>
            <Input
              placeholder="quantity"
              value={String(formData.quantity)}
              onChangeText={(value) =>
                setData({ ...formData, quantity: value })
              }
            />
          </FormControl>
          <FormControl isRequired my={2}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Unit
            </FormControl.Label>
            <Input
              placeholder="unit"
              value={String(formData.unit)}
              onChangeText={(value) => setData({ ...formData, unit: value })}
            />
          </FormControl>
          <FormControl isRequired my={2}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Minimum Quantity
            </FormControl.Label>
            <Input
              placeholder="minimumQuantity"
              value={String(formData.minimumQuantity)}
              onChangeText={(value) =>
                setData({ ...formData, minimumQuantity: value })
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
