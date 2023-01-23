import React, { useEffect, useState } from "react";
import { createProduct, getSupplier } from "./api";
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Input,
  ScrollView,
  Select,
  Text,
  VStack,
} from "native-base";

export default function NewProduct({ navigation }) {
  const [suppliers, setSuppliers] = useState([]);
  const [formData, setData] = React.useState({
    name: "",
    quantity: "",
    unit: "",
    minimumQuantity: "",
    supplierId: "",
  });

  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchSupplier = async () => {
    const resp = await getSupplier();
    setSuppliers(resp);
  };

  const onSubmit = async () => {
    const payload = {
      name: formData.name,
      quantity: Number(formData.quantity),
      unit: formData.unit,
      minimumQuantity: Number(formData.minimumQuantity),
      supplierId: formData.supplierId,
    };

    const resp = await createProduct(payload);
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

          <FormControl isRequired my={2}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Pilih Supplier
            </FormControl.Label>
            <Select
              selectedValue={formData.supplierId}
              minWidth="200"
              accessibilityLabel="Pilih Supplier"
              placeholder="Pilih Supplier"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) =>
                setData({ ...formData, supplierId: itemValue })
              }
            >
              {suppliers.length ? (
                suppliers.map((item) => (
                  <Select.Item
                    label={item.name}
                    value={item._id}
                    key={item._key}
                  />
                ))
              ) : (
                <Text></Text>
              )}
            </Select>
          </FormControl>
          <Button mt={3} onPress={onSubmit}>
            Submit
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}
